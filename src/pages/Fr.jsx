import React, { useEffect } from "react";
import Usesystem from "../components/Usesystem";
import Btn from "../components/btn";
import { active, anactive, re } from "../store/user";
import  axios from "axios";

import { homeApi } from "../utils/homeApi";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Fr = () => {
    const { act, er } = useSelector((state) => state.user);
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const api = async () => {
      try {
        dispatch(active(true));
        const response = await axios.get(homeApi, {
          withCredentials: true,
        });
        if (!response.data.error) {
          dispatch(re(response.data.messages));

          dispatch(active(false));
          dispatch(anactive(false));
        } else {
          dispatch(active(false));
          dispatch(anactive(false));

          navigate("/Login");
        }
      } catch (error) {
        dispatch(active(false));
        dispatch(anactive(true));

        console.log(error, "ho gato");
      }
    };

    useEffect(() => {
      api();
    }, []);
  return (
    <div className=" text-end h-screen text-white bg-gray-700 relative  flex justify-center items-center text-[4.5vw] sm:text-[3.5vw] ">
      {act ? (
        <div>loading</div>
      ) : er ? (
        <div>check the connection</div>
      ) : (
        <div className="text-start  relative bg-zinc-950 w-full p-[5vw] h-full sm:min-h-[80vh]  pt-[30vh] sm:pt-[10vw] sm:w-10/12">
          <Usesystem />
          <div className="absolute top-0 left-0 my-2">
            <Btn name={"Go back"} trn={"/"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Fr;
