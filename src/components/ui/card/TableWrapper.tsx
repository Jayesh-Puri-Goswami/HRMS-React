/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import DataTable from "../../tables/Table/DataTable";
import TableCard from "./TableCard";
import { motion } from "framer-motion";

interface TableWrapperProps<T> {
  title?: string | React.ReactNode;
  actionButton?: React.ReactNode;
  showBorder?: boolean;
  showShadow?: boolean;
  padding?: string;
  animate?: boolean;
  columns?: any[];
  data?: T[];
  loading?: boolean;
  getRowKey?: (row: T) => string;
  onRowClick?: (row: T) => void;
  children?: React.ReactNode;
}

function TableWrapper<T extends object>({
  title,
  actionButton,
  showBorder,
  showShadow,
  padding,
  animate,
  columns,
  data,
  loading = false,
  getRowKey,
  onRowClick,
  children,
}: TableWrapperProps<T>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-white tablewrapper rounded-3xl shadow-md dark:bg-black dark:border-gray-800 border p-5"
    >
      <div className="min-h-[20rem] flex flex-col gap-4">
        {(title || actionButton) && (
          <TableCard
            title={title || "No Title"}
            actionButton={actionButton}
            showBorder={false}
            showShadow={false}
            padding="none"
            animate={false}
          />
        )}
        {children ? (
          <div className="flex flex-col gap-2 w-full overflow-x-auto">
            {children}
          </div>
        ) : (
          columns &&
          data &&
          getRowKey && (
            <div className="w-full overflow-x-auto">
              <DataTable
                columns={columns}
                data={data}
                loading={loading}
                getRowKey={getRowKey}
                onRowClick={onRowClick}
              />
            </div>
          )
        )}
      </div>
    </motion.div>
  );
}

export default TableWrapper;
