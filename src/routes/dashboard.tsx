import { useState } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import UsersGrid from "../components/usersGrid/UsersGrid";
import Breadcrumb from "../components/Breadcrumb";

export default function Dashboard() {
  const [refresh, setRefresh] = useState(0);

  return (
    <>
      <SignedIn>
        <Navbar />
        <div style={{ paddingTop: "40px", margin: "0 auto" }}>
          <Breadcrumb
            items={[{ title: "Dashboard", link: null }]}
            onUserAdded={() => setRefresh((r) => r + 1)}
          />
          <div style={{ paddingTop: "20px" }}>
            <UsersGrid refresh={refresh} />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
