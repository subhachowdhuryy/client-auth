import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/clerk-react';

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome! You are signed in.</p><UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}