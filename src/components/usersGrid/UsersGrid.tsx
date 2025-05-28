import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import type { ColDef } from "ag-grid-community";

interface UserInterface {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: "Developer" | "Designer" | "Manager";
  joiningDate: string;
}

const UsersGrid = () => {
  const [rowData, setRowData] = useState<UserInterface[]>([]);
  const [colDefs] = useState<ColDef<UserInterface>[]>([
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", filter: true, width: 160 },
    { field: "email", headerName: "Email", filter: true, width: 220 },
    { field: "phone", headerName: "Phone Number", width: 140 },
    { field: "role", headerName: "Role", filter: true, width: 120 },
    { field: "joiningDate", headerName: "Joining Date", width: 140 },
  ]);

  useEffect(() => {
    setRowData([
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "1234567890",
        role: "Developer",
        joiningDate: "2022-03-15",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        phone: "9876543210",
        role: "Designer",
        joiningDate: "2021-11-20",
      },
      {
        id: 3,
        name: "Carol Lee",
        email: "carol.lee@example.com",
        phone: "5551234567",
        role: "Manager",
        joiningDate: "2020-07-01",
      },
      {
        id: 4,
        name: "David Kim",
        email: "david.kim@example.com",
        role: "Developer",
        joiningDate: "2023-01-10",
      },
      {
        id: 5,
        name: "Eva Green",
        email: "eva.green@example.com",
        phone: "4445556666",
        role: "Designer",
        joiningDate: "2022-09-05",
      },
      {
        id: 6,
        name: "Frank Moore",
        email: "frank.moore@example.com",
        phone: "3332221111",
        role: "Manager",
        joiningDate: "2021-05-30",
      },
      {
        id: 7,
        name: "Grace Hall",
        email: "grace.hall@example.com",
        role: "Developer",
        joiningDate: "2023-04-18",
      },
      {
        id: 8,
        name: "Henry Adams",
        email: "henry.adams@example.com",
        phone: "7778889999",
        role: "Designer",
        joiningDate: "2022-12-12",
      },
      {
        id: 9,
        name: "Ivy Baker",
        email: "ivy.baker@example.com",
        phone: "6665554444",
        role: "Manager",
        joiningDate: "2020-10-22",
      },
      {
        id: 10,
        name: "Jack White",
        email: "jack.white@example.com",
        role: "Developer",
        joiningDate: "2021-08-14",
      },
    ]);
  }, []);

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: 500,
        width: 900,
        margin: "0 auto",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout="normal"
      />
    </div>
  );
};

export default UsersGrid;
