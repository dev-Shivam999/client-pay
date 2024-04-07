import React, { memo, useCallback } from 'react';
import axios from 'axios';
import { getbal } from '../utils/homeApi';

const GetBalance = memo(() => {
  const moneyGet = useCallback(async () => {
    const { data } = await axios.get(
      getbal,
      {
        withCredentials: true,
      }
    );
    if (data.success) {
      alert(data.message);
      
    }
    else{
        alert(data.message)
    }
  })
  return (
    <button
      className="uppercase  p-2 px-4 rounded-md bg-slate-800 text-white"
      onClick={() => moneyGet()}>
      get money
    </button>
  );
})



export default GetBalance;