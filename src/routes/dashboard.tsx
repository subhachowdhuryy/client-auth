import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import UsersGrid from "../components/usersGrid/UsersGrid";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <SignedIn>
        <div style={{ paddingTop: "80px" }}>
          <h1>Dashboard</h1>
          <p>Welcome! You are signed in.</p>
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
