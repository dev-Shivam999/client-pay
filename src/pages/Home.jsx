import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import Search from "../components/search";;
import Logout from "../components/Logout";
import GetBalance from "../components/GetBalance";
import Del from "../components/Del";
import Btn from "../components/btn";
import { first } from "../utils/homeApi";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { active, anactive } from "../store/user";

const Home = memo(() => {
  
    const { act, er } = useSelector((state) => state.user);
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const api=async()=>{
    
        dispatch(active(true));
    const {data}=await axios.get(first, {
          withCredentials: true,
        })

        if (data.error) {
          
          dispatch(active(false));
          dispatch(anactive(false));
          alert(data.messages);
          navigate('/Login')
        }

        
          dispatch(active(false));
          dispatch(anactive(false));
        
  }
  useEffect(()=>{
    api()
  },[])

  console.log("lol");
  return (
    <div className="bg-gray-700 ">
    {act?<div>loading...</div>:er?<div>check the error in connection</div>: (
        <div className="sm:w-[640px] relative bg-zinc-950 rounded-md shadow-2xl mx-auto min-h-screen p-[2vw]">
          <div className="  flex items-center pr-2">
            <Search />
            <div>
              <Logout />
            </div>
          </div>

          <Btn trn={"/fr"} name={"friend"} />
          
          <nav className="absolute top-[90vh] w-full left-0 my-3">
            <div className="flex justify-evenly">
              <Btn trn={"/save"} name={"History"} />

              <Del />
              <GetBalance />
              <Btn trn={"/bal"} name={"Check balance"} />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
});

export default Home;
