import FeaturedProducts from "@/components/home/FeaturedProducts"
import Hero from "@/components/home/Hero"
import { Suspense } from 'react';
import LoadingContainer from '@/components/global/LoadingContainer';

const Homepage = () => {
  return (
    <>
      <Hero/>
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
    
  )
}

export default  Homepage