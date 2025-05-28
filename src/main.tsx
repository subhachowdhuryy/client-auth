import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from './routes'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

function AppRoutes() {
  return useRoutes(routes)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      afterSignInUrl="/dashboard"
    >
      <ClerkLoaded>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ClerkLoaded>
    </ClerkProvider>
  </React.StrictMode>,
)

export default function ProtectedPage() {
  return (
    <>
      <SignedIn>
        <div>Protected content</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}