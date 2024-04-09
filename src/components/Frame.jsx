import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const Frame = ({cn}) => {
    
    const { act, er } = useSelector((state) => state.user);
    return (
          <div className="bg-gray-700 ">
        {act ? (
          <div className="h-screen w-full text-white pt-[40vh] text-center  flex justify-start items-start text-5xl">
            <div className="text-center">loading...</div>
          </div>
        ) : er ? (
          <div className='h-screen text-center pt-[25vw] text-3xl text-white'>check the error in connection</div>
        ) :
      <div> {cn}</div>
      }
      </div>
    );
};

export default Frame;