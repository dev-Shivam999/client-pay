import React, { memo, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { out } from '../utils/homeApi';

const Logout = memo(() => {
  const navigate=useNavigate()
    
     const logout = useCallback(async () => {

       try {
         const response = await axios.get(
           out,
           {
             withCredentials: true,
           }
         );

         if (!response.data.error) {
          navigate('/Login')
        }
    } catch (error) {
        console.log(error);
                  navigate("/Login");

       }
     },[])
    return (
      <button
        className=" bg-slate-800 text-white px-2 py-1 rounded-md"
        onClick={() => logout()}>
        logout
      </button>
    );
})

export default Logout;



