import './App.css'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <h1 style={{ 
        color: '#3730a3', 
        textAlign: 'center', 
        marginTop: '2rem', 
        marginBottom: '2rem', 
        fontSize: '2.5rem', 
        letterSpacing: '1px' 
      }}>
        Employee Management Portal
      </h1>
      <div
        style={{
          background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        <header
          style={{
            background: 'white',
            padding: '2rem 3rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            textAlign: 'center',
            minWidth: '320px',
          }}
        >
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            Welcome! Manage your users with ease.<br />
            Please sign in or sign up to continue.
          </p>
          <SignedOut>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <SignInButton>
                <button
                  style={{
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    background: '#6366f1',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  style={{
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    background: '#14b8a6',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                >
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <div style={{ marginTop: '1.5rem' }}>
              <UserButton />
            </div>
          </SignedIn>
        </header>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
