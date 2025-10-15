import { FilterIcon } from "lucide-react";
import { MaterialReactTable, MRT_ColumnDef, MRT_TableOptions } from "material-react-table";
import { useMemo } from "react";
import React from "react";

import { ICommsRecordProps, useDataOutage } from "@/app/contexts/DataContext";

import "./TableRecords.styles.scss";
import { TableRecordsProps } from "./TableRecords.types";

const TableRecords: React.FC<TableRecordsProps> = () => {
  const { outageData, loading } = useDataOutage();

  const columns = useMemo<MRT_ColumnDef<ICommsRecordProps>[]>(
    () => [
      {
        accessorKey: "customerId",
        header: "Customer ID",
      },
      {
        accessorKey: "outageId",
        header: "Outage ID",
      },
      {
        accessorKey: "channel",
        header: "Channel",
      },
      // {
      //   accessorKey: "templateUsed",
      //   header: "Template used",
      //   Cell: ({ cell }): React.ReactNode => (
      //     <a href={cell.getValue<string>()} target="_blank" rel="noreferrer">
      //       {cell.getValue<string>()}
      //     </a>
      //   ),
      // },
      {
        accessorKey: "sentAt",
        header: "Sent at",
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
      },
      renderTopToolbarCustomActions: () => (
        <div className="records__label">
          <FilterIcon />
          Filters
        </div>
      ),
    }),
    [columns, outageData?.COMMS_RECORDS, loading]
  );

  return <MaterialReactTable {...tableProps} />;
};

export default TableRecords;
