import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import {FadeLoader} from "react-spinners"
import { COLUMNS } from "../Others/Columns";
import "./table.css";
import { useGetUsersQuery } from "../Api/users/usersApi";
import "./Modal.css";

export const UserTable = () => {
  const { data: users = [], isError, refetch } = useGetUsersQuery();
  const [showTable, setShowTable] = useState(false);

  const columns = useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: users,
    });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTable(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="table-container">
      {!showTable && (
        <div className="loading-container">
          <FadeLoader color={"#3f51b5"} size={150} className="loading-spinner"/>
        </div>
      )}
      {isError && <div>Error loading data</div>}
      {showTable && (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render?.("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render?.("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};






