'use client';

import { useAuthUser } from '@/lib/useAuth';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { user, isLoading, isAuthenticated } = useAuthUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Your Profile</h1>
            <Link href="/dashboard" className="btn btn-sm btn-secondary">
              Back to Dashboard
            </Link>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-5">
              <div className="row mb-4">
                <div className="col-md-3 text-center">
                  <div className="mb-3">
                    <div className="avatar avatar-lg">
                      <img
                        alt={user.given_name || 'User'}
                        className="rounded-circle"
                        src={user.picture || 'https://via.placeholder.com/150'}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <h3 className="mb-1">
                    {user.given_name} {user.family_name}
                  </h3>
                  <p className="text-muted mb-3">{user.email}</p>
                  <p className="small text-secondary">
                    <strong>User ID:</strong> {user.id}
                  </p>
                </div>
              </div>

              <hr className="my-4" />

              <div className="row mb-4">
                <div className="col-md-6">
                  <h5 className="mb-3">Account Information</h5>
                  <dl className="row">
                    <dt className="col-sm-4">Email:</dt>
                    <dd className="col-sm-8">{user.email}</dd>
                    <dt className="col-sm-4">First Name:</dt>
                    <dd className="col-sm-8">{user.given_name || '-'}</dd>
                    <dt className="col-sm-4">Last Name:</dt>
                    <dd className="col-sm-8">{user.family_name || '-'}</dd>
                  </dl>
                </div>
                <div className="col-md-6">
                  <h5 className="mb-3">Additional Details</h5>
                  <dl className="row">
                    <dt className="col-sm-4">Email:</dt>
                    <dd className="col-sm-8">{user.email || '-'}</dd>
                  </dl>
                </div>
              </div>

              <hr className="my-4" />

              <div className="d-flex gap-2">
                <LogoutLink>
                  <button className="btn btn-outline-danger">Logout</button>
                </LogoutLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
