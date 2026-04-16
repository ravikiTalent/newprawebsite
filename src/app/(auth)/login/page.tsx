'use client';

import Link from 'next/link';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';

export default function LoginPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="card-title text-center mb-4 fw-bold">Login</h1>
              
              <div className="mb-4">
                <LoginLink>
                  <button className="btn btn-primary w-100 btn-lg">
                    Sign In with Kinde
                  </button>
                </LoginLink>
              </div>

              <div className="text-center">
                <p className="text-muted mb-2">Don't have an account?</p>
                <Link href="/signup" className="btn btn-link btn-sm">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
