import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "api/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (!user) {
    router.push("/");
    return null;
  }

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl">
        Welcome back, {user.displayName || user.email} 🎉
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
