'use client';

import { useAuthUser } from '@/lib/useAuth';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
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
            <p className="mt-3 text-muted">Loading your dashboard...</p>
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
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="mb-0">Welcome to Your Dashboard! 🎉</h1>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">User Information</h5>
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-2">
                    <strong>Name:</strong> {user.given_name} {user.family_name}
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="mb-0">
                    <strong>User ID:</strong> {user.id}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h6 className="text-muted">Services</h6>
                  <h3 className="mb-0">12</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h6 className="text-muted">Orders</h6>
                  <h3 className="mb-0">5</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h6 className="text-muted">Pending</h6>
                  <h3 className="mb-0">2</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <h6 className="text-muted">Completed</h6>
                  <h3 className="mb-0">3</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex gap-2">
            <LogoutLink>
              <button className="btn btn-outline-danger">Logout</button>
            </LogoutLink>
          </div>
        </div>
      </div>
    </div>
  );
}
