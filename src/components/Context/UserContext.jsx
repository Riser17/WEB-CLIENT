
import {createContext, useState} from 'react';
import axios from 'axios'
const apiUrl = 'http://deploy-server-kohl.vercel.app'

export const UserContext = createContext();

const UserContextProvider =(props)=>{

 
   
  const SubmitFormData =async(body) =>{
 
    try{
        const response = await axios.post (apiUrl + '/contactus', body);
        return response;
    }catch(error){
        throw error;
    }
  }

    const value={SubmitFormData};

    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;


