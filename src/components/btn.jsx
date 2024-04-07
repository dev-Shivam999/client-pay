import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Btn = memo(({name,trn}) => {
    const navigate = useNavigate()
    const sav = useCallback((e) => {
      navigate(e);
    })
    return (
      <button
        className=" bg-slate-800 text-white mx-2 px-3 p-2 rounded-md "
        onClick={() => sav(trn)}>
        {name}
      </button>
    );
})

export default Btn;