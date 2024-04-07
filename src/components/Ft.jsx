import  axios  from 'axios';
import React, { memo, useCallback, useState } from 'react';
import { allPerson } from '../utils/homeApi';

const Ft = memo(({ p, i, cl = " bg-slate-800 text-white " }) => {
  const [friend, addFriend] = useState([]);
  const trans = useCallback(async (e, l) => {
    const { data } = await axios.post(
      allPerson,
      {
        id: e._id,
      },
      {
        withCredentials: true,
      }
    );
    if (data.done) {
      addFriend([...friend, l]);
    } else {
      addFriend([...friend, l]);
    }
  });
  return (
    <button
      onClick={() => trans(p, i)}
      className={`${cl}  rounded-md px-2 py-2`}>
      {friend.includes(i) ? "added" : "add  friend"}
    </button>
  );
});

export default Ft;