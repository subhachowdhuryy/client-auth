import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <>
      <h1 style={{ 
        color: '#3730a3', 
        textAlign: 'center', 
        marginBottom: '2rem', 
        fontSize: '2.5rem', 
        letterSpacing: '1px' 
      }}>
        Employee Management Portal
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <header
          style={{
            background: 'white',
            padding: '2rem 3rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            textAlign: 'center',
            minWidth: '100%',
          }}
        >
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            Welcome! Manage your users with ease.<br />
            Please sign in to continue.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SignIn />
          </div>
        </header>
      </div>
    </>
  );
}