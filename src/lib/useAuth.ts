'use client';

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { useEffect, useState } from 'react';

export function useAuthUser() {
  const { user, isLoading, isAuthenticated } = useKindeAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return { user: null, isLoading: true, isAuthenticated: false };
  }

  return { user, isLoading, isAuthenticated };
}

export function useRequireAuth() {
  const { user, isLoading, isAuthenticated } = useKindeAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading && !isAuthenticated) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, isLoading, mounted]);

  return { user, isLoading, isAuthenticated };
}
