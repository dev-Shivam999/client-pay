import axios from 'axios';
import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userdel } from '../utils/homeApi';

const Del = memo(() => {
    const [Loading,setloading]=useState(false)
    const navigate=useNavigate()
    const del=useCallback(async()=>{
        setloading(true)
        const { data } = await axios.get(
          userdel,
          {
            withCredentials: true,
          }
        );
     
        if (!data.error) {
            setloading(false)
            navigate('/Login')
        }else{
            setloading(false)
            console.log(data);
        }

    })
    return (
      <button
        className="mx-2 p-2 px-3 bg-slate-800 text-white rounded-md"
        onClick={() => del()}>
        {Loading ? "loading.." : "del account"}
      </button>
    );
})
export default Del;



