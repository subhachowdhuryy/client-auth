import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <>
      <h1 style={{ 
        color: '#3730a3', 
        textAlign: 'center', 
        // marginTop: '2rem', 
        marginBottom: '2rem', 
        fontSize: '2.5rem', 
        letterSpacing: '1px' 
      }}>
        User Management Portal
      </h1>
      <div
        style={{
        //   background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        //   minHeight: '80vh',
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