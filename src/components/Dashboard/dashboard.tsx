import { useState } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";
import UsersGrid from "../usersGrid/UsersGrid";
import Breadcrumb from "../Breadcrumb";
import UserListAdd from "../usersGrid/UserListAdd";
import type { UserInterface } from "../usersGrid/UserListAdd";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const [refresh, setRefresh] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<UserInterface | null>(null);

  // Add or update user
  const handleUserSubmit = (user: UserInterface): void => {
    let users: UserInterface[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (user.id) {
      users = users.map((u) => (u.id === user.id ? user : u));
    } else {
      user.id = Date.now();
      users.push(user);
    }
    localStorage.setItem("users", JSON.stringify(users));
    setRefresh((r) => r + 1);
    setModalOpen(false);
    setEditUser(null);
  };

  return (
    <>
      <SignedIn>
        <Navbar />
        <div style={{ paddingTop: "40px", margin: "0 auto" }}>
          <Breadcrumb
            items={[{ title: "Dashboard", link: null }]}
            onAddClick={() => {
              setEditUser(null);
              setModalOpen(true);
            }}
          />
          <UserListAdd
            open={modalOpen}
            setOpen={setModalOpen}
            onUserSubmit={handleUserSubmit}
            editUser={editUser}
          />
          <div style={{ paddingTop: "20px" }}>
            <UsersGrid
              refresh={refresh}
              onEditUser={(user) => {
                setEditUser(user);
                setModalOpen(true);
              }}
            />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
