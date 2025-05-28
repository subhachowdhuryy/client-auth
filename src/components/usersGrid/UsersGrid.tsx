import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState, useMemo } from "react";
import type { ColDef } from "ag-grid-community";

interface UserInterface {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: "Developer" | "Designer" | "Manager";
  joiningDate: string;
}

const UsersGrid = ({ refresh }: { refresh: number }) => {
  const [rowData, setRowData] = useState<UserInterface[]>([]);
  const [colDefs] = useState<ColDef<UserInterface>[]>([
    {
      headerName: "Sl No",
      width: 80,
      valueGetter: params => (params.node && params.node.rowIndex != null ? params.node.rowIndex + 1 : ""),
      filter: false,
      sortable: false,
    },
    { field: "name", headerName: "Name", width: 160, filter: true },
    { field: "email", headerName: "Email", width: 220, filter: true },
    { field: "phone", headerName: "Phone Number", width: 140, filter: true },
    { field: "role", headerName: "Role", width: 120, filter: true },
    { field: "joiningDate", headerName: "Joining Date", width: 140, filter: true },
  ]);

  const defaultColDef = useMemo<ColDef>(() => ({
    floatingFilter: true,
    resizable: true,
    sortable: true,
  }), []);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    setRowData(users);
  }, [refresh]);

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: 520,
        width: 900,
        margin: "0 auto",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        domLayout="normal"
      />
    </div>
  );
};

export default UsersGrid;
