import axios from 'axios';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { cash } from '../store/Bal';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { showbal } from '../utils/homeApi';
import Btn from './btn';

const Bol = memo(() => {
    const dispatch=useDispatch()
    
    const { money } = useSelector((state) => state.Bal);
    const [use,SetUse]=useState([])
     const bal = useCallback(async () => {
       try {
         const money = await axios.get(
           showbal,
           {
             withCredentials: true,
           }
         );
         if (money.data.money) {
          SetUse(money.data.user)
           dispatch(cash(money.data.money));
         }
       } catch (error) {
         console.log(error, "lol");
       }
     });

      useMemo(() => {
        bal();
      }, []);
     
    return (
      <div className=" text-end h-screen text-white bg-gray-700  flex justify-center items-center text-[4.5vw] sm:text-[3.5vw] ">
        <div className="text-start  relative bg-zinc-950 w-full p-[5vw] h-full sm:min-h-[80vh]  pt-[30vh] sm:pt-[10vw] sm:w-10/12">
          <div>
            <div>Your Balance : ₹{money[0]?.balance} </div>
            <div className="my-3"> Name : {use[0]?.name}</div>
            <div className="my-3"> Email : {use[0]?.email}</div>
            <div className="my-3"> Id : {use[0]?._id}</div>
          </div>
          <div className="mx-auto w-max">
            <Btn name={"Go Back"} trn={"/"} />
          </div>
        </div>
      </div>
    );
})

export default Bol;




