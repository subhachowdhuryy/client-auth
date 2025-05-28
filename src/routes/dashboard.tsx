import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import UsersGrid from "../components/usersGrid/UsersGrid";
import Breadcrumb from "../components/Breadcrumb";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <Navbar />
        <div style={{ paddingTop: "40px", margin: "0 auto" }}>
          <Breadcrumb items={[{ title: "Dashboard", link: null }]} />
          
          <div style={{ paddingTop: "20px" }}>
            <UsersGrid />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
