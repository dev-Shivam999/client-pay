import axios from "axios";
import React, { memo, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sing } from "../utils/homeApi";

const Sign = memo(() => {
  const name = useRef();
  const password = useRef();
  const email = useRef();
  const navigate=useNavigate()
const hand = useCallback(async (e) => {
  e.preventDefault();
 
 if (
   email.current.value == "" ||
   name.current.value == "" ||
   password.current.value==""
 ) {
  return alert("Please enter")
 }
  let { data } = await axios.post(
    sing,
    {
      email: email.current.value,
      name: name.current.value,
      password: password.current.value,
    },
    { withCredentials: true }
  );
  console.log(data);
  if (!data.error) {
    alert(data.message);
    navigate('/Friend')

  }else{
    alert(data.message);
    
  }
});

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="bg-white lg:w-4/12 md:w-1/2 sm:w-6/12 w-full mx-auto">
        <div className="p-5 border-b-2">
          <h4 className="font-semibold uppercase text-gray-700">Register</h4>
        </div>
        <div className="p-5">
          <form className="w-full" onSubmit={(e) => hand(e)}>
            <div className="inline-grid w-full mb-3">
              <label className="mb-2">Name</label>
              <input
                type="text"
                ref={name}
                name="name"
                className="focus:outline-none focus:ring-2 ring-purple-300 placeholder-gray-600 bg-gray-200 w-full p-2 rounded"
                placeholder="Name"
              />
              <label className="mb-2">Email</label>
              <input
                type="email"
                name="email"
                ref={email}
                className="focus:outline-none focus:ring-2 ring-purple-300 placeholder-gray-600 bg-gray-200 w-full p-2 rounded"
                placeholder="Email address"
              />
            </div>
            <div className="inline-grid w-full mb-3">
              <label className="mb-2">Password</label>
              <input
                type="password"
                ref={password}
                name="password"
                className="focus:outline-none focus:ring-2 ring-purple-300 placeholder-gray-600 bg-gray-200 w-full p-2 rounded"
                placeholder="Password"
              />
            </div>
            <div className="p-5 border-t-2 flex gap-1">
              <div className="inline-grid w-1/2 mb-3">
                <Link
                  to={"/Login"}
                  className="bg-purple-600 focus:outline-none p-1.5 rounded font-semibold  hover:bg-purple-800 text-center hover:text-white text-white">
                  Login
                </Link>
              </div>
              <div className="inline-grid w-1/2 mb-3">
                <button
                  type="submit"
                  className=" p-1.5 rounded focus:outline-none font-semibold hover:bg-purple-500 hover:text-white transition text-purple-500 border border-purple-500">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
})

export default Sign;





