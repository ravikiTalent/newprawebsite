"use client";
import { useState } from "react";
import { useAuth } from "context/AuthContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const { login, register } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      login(); // Kinde handles the login flow
    } else {
      register(); // Kinde handles the registration flow
    }
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isLogin ? "Login" : "Register"}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-center mb-4">
              {isLogin ? "Sign in with Kinde" : "Sign up with Kinde"}
            </p>
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100 mb-3">
                {isLogin ? "Login with Kinde" : "Register with Kinde"}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError("");
                  }}
                >
                  {isLogin
                    ? "Don't have an account? Register"
                    : "Already have an account? Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
