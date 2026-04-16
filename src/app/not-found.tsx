import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#FDFAF4',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1C1917' }}>404 - Page Not Found</h2>
      <p style={{ color: '#78716C', marginBottom: '2rem' }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/" 
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#F06A2E',
          color: 'white',
          borderRadius: '100px',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
