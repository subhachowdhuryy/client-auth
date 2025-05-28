import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import UsersGrid from "../components/usersGrid/UsersGrid";
import Breadcrumb from "../components/Breadcrumb";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <SignedIn>
        <div style={{ paddingTop: "40px", margin: "0 auto" }}>
          <Breadcrumb items={[{ title: "Dashboard", link: null }]} />
          {/* <p>Welcome! You are signed in.</p> */}
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
