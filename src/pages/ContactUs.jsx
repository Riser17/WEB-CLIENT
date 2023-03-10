

import React, { Suspense, lazy } from 'react'

const Contact_Us_Image = lazy(()=> import( '../components/ContactUsImage/ContactUsImage'));
const Our_Locations = lazy(()=> import( '../components/Our-location/OurLocation'));
const Contact_Us_Form = lazy(()=> import( '../components/ContactUsForm/ContactUsForm'));

function ContactUs() {
  return (
    <div>
        <Contact_Us_Image/>
        <Our_Locations/>
        <Contact_Us_Form/>
       
    </div>
  )
}

export default ContactUs