'use client';

import Link from 'next/link';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

export default function SignupPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="card-title text-center mb-4 fw-bold">Create Account</h1>
              
              <div className="mb-4">
                <RegisterLink>
                  <button className="btn btn-success w-100 btn-lg">
                    Sign Up with Kinde
                  </button>
                </RegisterLink>
              </div>

              <div className="text-center">
                <p className="text-muted mb-2">Already have an account?</p>
                <Link href="/login" className="btn btn-link btn-sm">
                  Sign in here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
