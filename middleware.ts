import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/products(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth();
  
    if (!isPublicRoute(req) && !userId) {
      const signInUrl = new URL('https://composed-walleye-76.accounts.dev/sign-up');
      signInUrl.searchParams.set('redirect_url', req.url);
  
      return new Response(null, {
        status: 302,
        headers: {
          Location: signInUrl.toString(),
        },
      });
    }
  
    return undefined; // allow access
  });
  

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
