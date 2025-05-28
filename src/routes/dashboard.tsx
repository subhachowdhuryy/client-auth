import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <SignedIn>
        <div>
          <br/>
          <br/>
          <h1>Dashboard</h1>
          <p>Welcome! You are signed in.</p>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}