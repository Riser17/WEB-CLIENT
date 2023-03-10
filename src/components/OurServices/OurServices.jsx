import React from 'react'
import { useNavigate } from 'react-router-dom'
import fullstack from '../../assets//fullstack.png'
import servicenow from '../../assets//service-now.jpg'
import pega from '../../assets//pega-icon.png'
import mulesoft from '../../assets//mulesoft-icon.jpg'
import ai_ml from '../../assets//aiml-icon.png'
import cloud_serviced from '../../assets//cloud-services-icon.png'
import data_analytics from '../../assets//data-analytics-icon.png'
import blockchain from '../../assets//blockchain-icon.png'
import salesforce from '../../assets//salesforce-icon.png'
import ms_dynamics from '../../assets//ms-dynamics-icon.png'
import sap from '../../assets//sap-logo.png'
import oracle from '../../assets//oracle-logo.png'
import './OurServices.css'

export default function OurServices() {
    const services = [{
        label : 'fullstack',
        value : fullstack
      },{
        label : 'Servicenow',
        value : servicenow
      },
      {
        label : 'Servicenow',
        value : pega
      },
      {
        label : 'Servicenow',
        value : mulesoft
      },
      {
        label : 'Servicenow',
        value : ai_ml
      },
      {
        label : 'Servicenow',
        value : cloud_serviced
      },
      {
        label : 'Servicenow',
        value : data_analytics
      },
      {
        label : 'Servicenow',
        value : blockchain
      },
      {
        label : 'Servicenow',
        value : salesforce
      },
      {
        label : 'Servicenow',
        value : ms_dynamics
      },
      {
        label : 'Servicenow',
        value : sap
      },
      {
        label : 'Servicenow',
        value : oracle
      }];
    return (
      <div className='service-main'>

        <div className='services-head'>
        <span className='services-content'>Our Services</span>
         
          </div>
        <div className="container land1">

         

        {services?.map((service, key)=>(
      
      <div key={key} className="services-types" onClick={()=> navigate(service?.value)}>
      <div className="card land-main ">
            <img src={service.value} alt="fullstack" className='land-title card0' ></img>
        </div>
      </div>  
      ))}
      
      </div>
      </div>
      
  )
}
