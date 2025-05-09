"use client";
import { useClerk } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const SignOutLink = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(); // Sign out the user
    toast.success("Logged out successfully"); // Show Sonner toast
    router.push("/"); // Redirect to home page
  };

  return (
    <button onClick={handleSignOut} className="w-full text-left flex items-center gap-2">
      <LogOut className="h-4 w-4" />
      Logout
    </button>
  );
};

export default SignOutLink;
