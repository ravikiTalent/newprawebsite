import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export async function requireAuth() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  if (!user) {
    redirect('/login');
  }
  
  return user;
}

export async function getAuthUser() {
  try {
    const { getUser } = getKindeServerSession();
    return await getUser();
  } catch (error) {
    console.error('Error getting auth user:', error);
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getAuthUser();
  return !!user;
}
