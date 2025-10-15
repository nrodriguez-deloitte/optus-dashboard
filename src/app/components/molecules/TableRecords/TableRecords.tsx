import { FilterIcon } from "lucide-react";
import { MaterialReactTable, MRT_ColumnDef, MRT_TableOptions } from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import React from "react";

import { ICommsRecordProps, useDataOutage } from "@/app/contexts/DataContext";
import { isoToDateTime } from "@/lib/utils";

import "./TableRecords.styles.scss";
import { TableRecordsProps } from "./TableRecords.types";

const TableRecords: React.FC<TableRecordsProps> = () => {
  const { outageData, loading } = useDataOutage();

  // Get incidentId from URL query params on page load
  const [incidentId, setIncidentId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setIncidentId(params.get("incidentId"));
    }
  }, []);

  const columns = useMemo<MRT_ColumnDef<ICommsRecordProps>[]>(
    () => [
      {
        accessorKey: "customerId",
        header: "Customer ID",
      },
      {
        accessorKey: "incidentId",
        header: "Outage ID",
      },
      {
        accessorKey: "channel",
        header: "Channel",
      },
      {
        accessorKey: "sentAt",
        header: "Sent at",
        Cell: ({ cell }): React.ReactNode => isoToDateTime(cell.getValue<string>()),
      },
      {
        accessorKey: "region",
        header: "Region",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
    ],
    []
  );

  // Set the initial global filter to incidentId if present
  const [globalFilter, setGlobalFilter] = useState<string>("");

  useEffect(() => {
    if (incidentId) {
      setGlobalFilter(incidentId);
    }
  }, [incidentId]);

  const tableProps = useMemo<MRT_TableOptions<ICommsRecordProps>>(
    () => ({
      columns,
      data: outageData?.COMMS_RECORDS || [],
      muiTableBodyRowProps: { hover: true },
      enableColumnActions: false,
      enableDensityToggle: false,
      enableFullScreenToggle: false,
      enableHiding: false,
      state: {
        isLoading: loading,
        globalFilter,
      },
      onGlobalFilterChange: setGlobalFilter,
      renderTopToolbarCustomActions: () => (
        <div className="records__label">
          <FilterIcon />
          Filters
        </div>
      ),
    }),
    [columns, outageData?.COMMS_RECORDS, loading, globalFilter]
  );

  return <MaterialReactTable {...tableProps} />;
};

export default TableRecords;
