import React from 'react';
import { useField } from 'formik';
import * as Yup from 'yup';
import "yup-phone";



export const MyTextInput = ({ label, ...props }) => {
    
    const [field, meta] = useField(props);
    return (
      <div className='input_wrap'>
        <input className="text-input" {...field} {...props} required/>
     
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  

  
  export const MySelect = ({ values, label, ...props }) => {

    const [field, meta] = useField(props);

    return (
      <div className='input_wrap'>
        <select {...field} {...props}>
        <option hidden>Selecte an option</option>
        {values.map((opt)=>
                <option key={opt.id} value={opt.value}>{opt.placehoder}</option>
)}
          </select>
        <label htmlFor={props.id || props.name}>{label}</label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export const validationContactSchema = Yup.object({
    name: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    phone: Yup.string().phone("Please enter a valid phone number").required("A phone number is required"),
    message: Yup.string()
    .max(25, 'Must be 25 characters or less')
    .required('Required'),
     })

