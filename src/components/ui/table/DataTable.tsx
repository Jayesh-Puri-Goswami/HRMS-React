/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';


export interface DataTableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (row: T, index: any) => React.ReactNode;
  className?: string;
  _id?: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  loading: boolean;
  sortField: keyof T;
  sortDirection: 'asc' | 'desc';
  onSort: (field: keyof T) => void;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (n: number) => void;
  skeletonRows?: number;
  statusToggle?: (row: T) => React.ReactNode;
  getRowKey: (row: T, index: number) => string;
  path?: string;
  rowClassName?: string;
}

function DataTable<T extends object>({
  columns,
  data,
  loading,
  sortField,
  sortDirection,
  onSort,
  page,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  skeletonRows = 5,
  statusToggle,
  getRowKey,
  path = '',
  rowClassName,
}: DataTableProps<T>) {
  const SortIcon = ({ field }: { field: keyof T }) => (
    <ChevronDown
      size={16}
      className={`ml-1 transition-transform ${
        sortField === field
          ? sortDirection === 'desc'
            ? 'transform rotate-180'
            : ''
          : 'opacity-0 group-hover:opacity-100'
      }`}
    />
  );

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md "
    >
      <div className="overflow-x-auto min-h-[20rem] rounded-t-xl">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-themeBackgroundColor text-white rounded-t-xl">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer group ${
                    col.className || ''
                  }`}
                  onClick={col.sortable ? () => onSort(col.key) : undefined}
                >
                  <div className="flex items-center">
                    {col.label}
                    {col.sortable && <SortIcon field={col.key} />}
                  </div>
                </th>
              ))}
              {statusToggle && <th className="px-6 py-3"></th>}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            <AnimatePresence>
              {loading
                ? Array(skeletonRows)
                    .fill(0)
                    .map((_, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="hover:bg-slate-50"
                      >
                        {columns.map((col, i) => (
                          <td key={i} className="px-6 py-4 whitespace-nowrap ">
                            <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
                          </td>
                        ))}
                        {statusToggle && (
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="h-6 w-16 bg-slate-200 rounded-full animate-pulse"></div>
                          </td>
                        )}
                      </motion.tr>
                    ))
                : data.map((row : any , index) => (
                    <motion.tr
                      key={getRowKey(row, index)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1, delay: index * 0.05 }}
                      className="hover:bg-slate-50"
                    >
                      {columns.map((col, i) => (
                        <td
                          key={i}
                          onClick={() => {
                            if (path !== '') {
                              navigate(`${path}${row._id}`);
                            }
                          }}
                          className={`px-6 py-4 flex-row items-center justify-center ${
                            rowClassName ? rowClassName : 'whitespace-nowrap'
                          } `}
                        >
                          {col.render
                            ? col.render(row, index)
                            : String(row[col.key] ?? '')}
                        </td>
                      ))}
                      {statusToggle && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {statusToggle(row)}
                        </td>
                      )}
                    </motion.tr>
                  ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-4 pb-4">
          <div className="w-full sm:w-auto">
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className="w-full sm:w-auto p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 rounded-md text-sm"
            >
              {[10, 15, 25, 50].map((n) => (
                <option key={n} value={n}>
                  {n} per page
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-end w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange(Math.max(page - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-white border border-indigo-600 text-indigo-600 rounded-lg disabled:opacity-50"
            >
              Previous
            </motion.button>

            <span className="text-sm text-gray-600 dark:text-gray-300">
              Page {page} of {totalPages}
            </span>

            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange(Math.min(page + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-white border border-indigo-600 text-indigo-600 rounded-lg disabled:opacity-50"
            >
              Next
            </motion.button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default DataTable;



