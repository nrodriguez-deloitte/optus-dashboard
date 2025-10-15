import { FilterIcon } from "lucide-react";
import { MaterialReactTable, MRT_ColumnDef, MRT_TableOptions } from "material-react-table";
import Link from "next/link";
import React, { useMemo } from "react";

import { IOutageProps, useDataOutage } from "@/app/contexts/DataContext";
import { isoToDateTime, toTitleCase } from "@/lib/utils";

import "./TableOutages.styles.scss";
import { TableOutagesProps } from "./TableOutages.types";

const TableOutages: React.FC<TableOutagesProps> = () => {
  const { outageData, loading } = useDataOutage();

  const columns = useMemo<MRT_ColumnDef<IOutageProps>[]>(
    () => [
      {
        accessorKey: "incidentId",
        header: "Incident ID",
      },
      {
        accessorKey: "region",
        header: "Region",
      },
      {
        accessorKey: "severity",
        header: "ACMA",
        Cell: ({ cell }): React.ReactNode => toTitleCase(cell.getValue<string>()),
      },
      {
        accessorKey: "causeOfOutage",
        header: "Cause of outage",
      },
      {
        accessorKey: "incidentId",
        header: "Comms records",
        Cell: ({ cell }): React.ReactNode => (
          <Link href={`/records?incidentId=${cell.getValue<string>()}`} rel="noreferrer">
            View comms record
          </Link>
        ),
      },
      {
        accessorKey: "identifiedAt",
        header: "Identified at",
        Cell: ({ cell }): React.ReactNode => isoToDateTime(cell.getValue<string>()),
      },
      {
        accessorKey: "status",
        header: "Status",
      },
    ],
    []
  );

  const tableProps = useMemo<MRT_TableOptions<IOutageProps>>(
    () => ({
      columns,
      data: outageData?.OUTAGES || [],
      muiTableBodyRowProps: { hover: true },
      enableColumnActions: false,
      enableDensityToggle: false,
      enableFullScreenToggle: false,
      enableHiding: false,
      state: {
        isLoading: loading,
      },
      renderTopToolbarCustomActions: () => (
        <div className="records__label">
          <FilterIcon />
          Filters
        </div>
      ),
    }),
    [columns, outageData?.OUTAGES, loading]
  );

  return <MaterialReactTable {...tableProps} />;
};

export default TableOutages;
