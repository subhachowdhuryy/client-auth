import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState, useMemo } from "react";
import type { ColDef } from "ag-grid-community";
import { Pencil, Trash2 } from "lucide-react"; // lucide-react icons
import UserListDelete from "./userListDelete";

interface UserInterface {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: "Developer" | "Designer" | "Manager";
  joiningDate: string;
}

interface UsersGridProps {
  refresh: number;
  onEditUser: (user: UserInterface) => void;
}

const UsersGrid = ({ refresh, onEditUser }: UsersGridProps) => {
  const [rowData, setRowData] = useState<UserInterface[]>([]);
  const [colDefs] = useState<ColDef<UserInterface>[]>(
    [
      {
        headerName: "Sl No",
        width: 80,
        valueGetter: (params) =>
          params.node && params.node.rowIndex != null
            ? params.node.rowIndex + 1
            : "",
        filter: false,
        sortable: false,
      },
      { field: "name", headerName: "Name", width: 160, filter: true },
      { field: "email", headerName: "Email", width: 220, filter: true },
      { field: "phone", headerName: "Phone Number", width: 140, filter: true },
      { field: "role", headerName: "Role", width: 120, filter: true },
      {
        field: "joiningDate",
        headerName: "Joining Date",
        width: 140,
        filter: true,
      },
      {
        headerName: "Action",
        width: 100,
        cellRenderer: (
          params: import("ag-grid-community").ICellRendererParams<UserInterface>
        ) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              title="Edit"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              onClick={() => params.data && onEditUser(params.data)}
            >
              <Pencil size={18} color="#6366f1" />
            </button>
            <button
              title="Delete"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              onClick={() => params.data && handleDeleteClick(params.data)}
              // onClick={() => alert(`Delete user: ${params.data?.name ?? ""}`)}
            >
              <Trash2 size={18} color="#ef4444" />
            </button>
          </div>
        ),
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        },
        filter: false,
        sortable: false,
      },
    ]
  );
const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
const [userToDelete, setUserToDelete] = useState<UserInterface | null>(null);

const handleDeleteClick = (user: UserInterface) => {
  setUserToDelete(user);
  setDeleteDialogOpen(true);
};

const handleDeleteConfirm = () => {
  if (userToDelete) {
    // Get current users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Filter out the user to delete
    const updatedUsers = users.filter((u: UserInterface) => u.id !== userToDelete.id);
    // Save updated list back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    // Update the grid data
    setRowData(updatedUsers);
    // Close the dialog
    setDeleteDialogOpen(false);
  }
};
  const defaultColDef = useMemo<ColDef>(
    () => ({
      floatingFilter: true,
      resizable: true,
      sortable: true,
    }),
    []
  );

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    setRowData(users);
  }, [refresh]);

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: 520,
        width: 1000,
        margin: "0 auto",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        domLayout="normal"
      />
      <UserListDelete
  open={deleteDialogOpen}
  setOpen={setDeleteDialogOpen}
  onDeleteConfirm={handleDeleteConfirm}
  userName={userToDelete?.name || ""}
/>
    </div>
  );
};

export default UsersGrid;
