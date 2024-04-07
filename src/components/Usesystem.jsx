import React, { memo } from 'react';

import { useDispatch, useSelector } from "react-redux";
import Btn from './btn';

const Usesystem = memo(() => {
    
  const { user, act } = useSelector((state) => state.user);
    return (
      <div className="grid grid-cols-1 text-white max-h-full overflow-auto sm:grid-cols-2 relative gap-3 px-4">
        {user?.map((p) => (
          <div className="border-2 my-3 p-3" key={p?._id}>
            <div className="flex justify-between px-2">
              <div>{p?.name}</div>
              <div>
                <Btn trn={`/user/${p?._id}`} name={"send"} />
              </div>
            </div>
          </div>
        ))}
    
      </div>
    );
})

export default Usesystem;