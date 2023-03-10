import React, { Suspense, lazy } from 'react'

const Banner_image = lazy(()=> import( '../components/Banner-image/Banner_image'));
const OurServices = lazy(()=> import( '../components/OurServices/OurServices'));
const Footer_2 = lazy(()=> import( '../components/Footer-2/Footer_2'));




function Home() {
  return (
<>
<Banner_image/>
 <OurServices/>

</>
  )
}

export default Home