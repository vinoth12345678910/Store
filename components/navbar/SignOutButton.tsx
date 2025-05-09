'use client';
import { SignOutButton } from '@clerk/nextjs';
import { toast } from 'sonner';

function SignOutLink() {
  return (
    <SignOutButton
      signOutOptions={{
        // Redirect after successful sign-out
        redirectUrl: '/'
      }}
    >
      {/* Wrap in button for proper click handling */}
      <button 
        className='w-full text-left'
        onClick={() => toast.loading('Logging out...')}
      >
        Logout
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;
