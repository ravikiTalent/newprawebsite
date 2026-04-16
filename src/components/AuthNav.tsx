'use client';

import { useAuthUser } from '@/lib/useAuth';
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

export function AuthNav() {
  const { user, isLoading, isAuthenticated } = useAuthUser();

  return (
    <div className="d-flex align-items-center gap-2">
      {isLoading ? (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : isAuthenticated && user ? (
        <>
          <span className="text-muted me-2">
            {user.given_name} {user.family_name}
          </span>
          <Link href="/dashboard" className="btn btn-sm btn-primary me-2">
            Dashboard
          </Link>
          <LogoutLink>
            <button className="btn btn-sm btn-outline-danger">Logout</button>
          </LogoutLink>
        </>
      ) : (
        <>
          <LoginLink>
            <button className="btn btn-sm btn-primary me-2">Sign In</button>
          </LoginLink>
          <Link href="/signup" className="btn btn-sm btn-outline-primary">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
