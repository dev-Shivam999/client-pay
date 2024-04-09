import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import Search from "../components/search";
import Logout from "../components/Logout";
import GetBalance from "../components/GetBalance";
import Del from "../components/Del";
import Btn from "../components/btn";
import { first } from "../utils/homeApi";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { active, anactive } from "../store/user";
import Frame from "../components/Frame";
import HomeData from "../components/homedta";

const Home = memo(() => {
  const { act, er } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const api = async () => {
    dispatch(active(true));
   try {
     const { data } = await axios.get(first, {
       withCredentials: true,
     });

     if (data.error) {
       dispatch(active(false));
       dispatch(anactive(false));
       alert(data.messages);
       navigate("/Login");
     } else {
       dispatch(active(false));
       dispatch(anactive(true));
     }
   } catch (error) {
    dispatch(active(false));
    dispatch(anactive(true));
   }

    
  };
  useEffect(() => {
    api();
  }, []);

  return (
   
        <Frame cn={<HomeData />} />
     
  )
    
}
);

export default Home;
