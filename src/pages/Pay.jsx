import axios from "axios";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/button";

import { useDispatch, useSelector } from "react-redux";
import { userId, userpay, usersave } from "../utils/homeApi";
import Ft from "../components/Ft";

const Pay = memo(() => {
  const [data, setData] = useState();
  const [moneyData, setMoneyData] = useState("");
  const [loading, setloading] = useState(true); // State to hold cancel token
  const [err, setEr] = useState(false);
  const navigate = useNavigate();
  const money = useRef();
  const { id } = useParams();

  const api = async () => {
    try {
      setloading(true);
      const response = await axios.post(
        userId,
        { id: id },
        {
          withCredentials: true,
        }
      );
      console.log(response,id);
      if (!response.data.error) {
        setData(response.data);
        setloading(false);
        setEr(false);
      } else {
        alert(response.data?.message);
        setloading(false);
        setEr(false);
        // navigate("/");
      }
    } catch (error) {
      setloading(false);
      setEr(true);

      console.log(error, "ho gato");
    }
  };

  useEffect(() => {
    api();
  }, []);
  const hand = useCallback(async (e) => {
    e.preventDefault();
    if (parseInt(money.current.value)) {
      const response = await axios.post(
        userpay,
        { id: id, payment: money.current.value },
        {
          withCredentials: true,
        }
      );
      if (response.data?.ri) {
        alert(response.data.message);

        navigate("/");
      }
      console.log(response.data);
      alert(response.data.message);
      setMoneyData(response.data.balance);
    } else {
      alert("give only number");
    }
  });

  const go = useCallback(() => {
    navigate("/");
  });
  const sav = useCallback(async () => {
    const response = await axios.post(
      usersave,
      {
        dat: moneyData,
        na: data?.user?.name,
      },
      {
        withCredentials: true,
      }
    );
    if (response.data.error) {
      alert(response.data.message);
    } else {
      alert(response.data.message);

      navigate("/");
    }
  });
  return (
    <div className="w-full bg-gray-700  h-screen flex justify-center items-center">
      {loading ? (
        <div>loading</div>
      ) : err ? (
        <div>check the connection</div>
      ) : (
        <div className=" w-full sm:w-10/12 min-h-[70vh]  bg-zinc-950">
          <div className="relative px-3">
            <div className="w-16 h-16 rounded-full bg-slate-400 flex justify-center items-start mx-auto my-3 text-5xl">
              {data?.user?.name?.slice(0, 1).toUpperCase()}
            </div>

            <div className="flex justify-center">
              {!data?.add && (
                <Ft
                  p={data?.user}
                  i={data?.user?._id}
                  cl={"bg-white text-green-600"}
                />
              )}
            </div>
            <div></div>
            <button
              onClick={() => go()}
              className="text-white text-3xl absolute top-0">
              back
            </button>
          </div>
          <div className="sm:text-[2vw] text-[4vw] text-center font-medium text-white my-10">
            User name '{data?.user?.name}'
          </div>
          <form className="flex justify-center" onSubmit={(e) => hand(e)}>
            <input
              type="number"
              ref={money}
              className="border-2 border-black sm:max-w-[50%] w-full mx-[2vw]  px-3 py-1 rounded-md text-3xl"
              placeholder="send the payment "
            />
          </form>

          {moneyData && (
            <div className="text-center font-normal sm:text-[2vw] text-[5vw] text-white  uppercase">
              <div className="my-3">
                {" "}
                your current balance
                <span className="ms-5 ">{moneyData.newDebBalance}</span>
              </div>
              <div> transfer id {moneyData.creB._id}</div>
              <div className="my-3"> your transfer id {moneyData.debB._id}</div>
              <div>
                <Button name={"clear"} fu={go} />
                <Button name={"save"} fu={sav} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default Pay;
