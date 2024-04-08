import React from 'react';
import Ft from './Ft';
import { useDispatch, useSelector } from "react-redux";

const FriendDta = () => {
    
    const { user } = useSelector((state) => state.user);
    return (
      <>
        <button
          className="text-end text-gray-400 text-3xl my-2"
          onClick={() => navigate("/")}>
          Skip
        </button>
        <div className="grid grid-cols-1 relative gap-3 px-4">
          {user?.length > 0 ?
            user?.map((p, i) => (
              <div className="border-2 my-3 p-3" key={p._id}>
                <div className="flex justify-between px-2">
                  <div>{p.name}</div>
                  <div>
                    <Ft p={p} i={i} />
                  </div>
                </div>
              </div>
            )):<div>Add friend</div>}
        </div>
      </>
    );
};

export default FriendDta;