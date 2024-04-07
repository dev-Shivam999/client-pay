import axios from "axios";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Div from "../components/Div.jsx";
import { useNavigate } from "react-router-dom";
import { deltrans, transHistory } from "../utils/homeApi.js";
import Btn from "../components/btn.jsx";

const Save = memo(() => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const api = async () => {
    setLoading(true);
    const { data } = await axios.get(transHistory, {
      withCredentials: true,
    });
    if (data.success && data.data.save.length > 0) {
      setData(data.data.save);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    api();
  }, []);

  const del = useCallback(async (p) => {
    const { data } = await axios.post(
      deltrans,
      {
        data2: p,
      },
      {
        withCredentials: true,
      }
    );
    if (data.success) {
      alert(data.message);
      setData((data) => data.filter((i) => i != p));
    } else {
      alert(data.message);
    }
  });
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className=" flex bg-gray-700  justify-center items-center min-h-[100vh]">
          <div className="bg-zinc-950  w-full sm:w-10/12 min-h-[80vh] py-[5vw] sm:p-[5vw]">
            <div className="text-center text-white my-4 font-medium text-[5vw]">
              Your Payment History
            </div>
            <div className="grid grid-cols-4 gap-[4vw]   sm:px-0 bg-zinc-300 my-1 w-full text-center   text-[3vw] sm:text-[2vw] ">
              {/* <Div>Payment</Div>
              <Div>Current</Div>
              <Div>Privies Balance</Div>
              <Div>Transition Id</Div> */}
            </div>
            {data?.length > 0 ? (
              data?.map((p, i) => (
                <div
                  onClick={() => del(p)}
                  className="  rounded-xl bg-zinc-300  mx-auto  my-3 w-1/2 text-[3vw] sm:text-[2vw] "
                  key={i}>
                  <div className="flex ">
                    <div className="bg-purple-400 rounded-xl font-semibold  p-2 px-4 text-[3vw]">
                      {p.name.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="ps-1">
                      <div className="flex justify-between ">
                        <Div>{p.name}</Div>
                        <Div>₹{p.debB.balance - p.newDebBalance}</Div>
                      </div>
                      <Div>upi {p.creB.userId}</Div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-[5vw] text-center my-4 text-white uppercase">
                plz add some Transition
              </div>
            )}
            <div className="flex justify-center">
              <Btn name={"Go Back"} trn={"/"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Save;
