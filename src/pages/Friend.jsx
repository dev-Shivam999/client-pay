import axios from 'axios';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { re } from '../store/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FreindApi } from '../utils/homeApi';
import Ft from '../components/Ft';

const Friend = memo(() => {
    
  const navigate = useNavigate();
  
  const [err, setEr] = useState(false);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  
    const { user } = useSelector((state) => state.user);
    const api = async () => {
      try {
        setloading(true);
        const response = await axios.get(
          FreindApi,
          {
            withCredentials: true,
          }
        );



        if (!response.data.error) {
          if (response.data.messages.length>0) {
            dispatch(re(response.data.messages));
          }else{

            navigate('/')
          }


          setloading(true);
          setEr(false);
        } else {
          setloading(true);
          setEr(false);

          navigate("/Login");
        }
      } catch (error) {
        setloading(true);
        setEr(true);

        console.log(error, "ho gato");
      }
    };

    

    useEffect(()=>{
        api()
    },[])
    return (
      <div>
        {!loading ? (
          <div>loading</div>
        ) : err ? (
          <div>check the connection</div>
        ) : (
          <>
            <button
              className="text-end text-gray-400 text-3xl my-2"
              onClick={() => navigate("/")}>
              Skip
            </button>
            <div className="grid grid-cols-1 relative gap-3 px-4">
              {user?.length>0&&user?.map((p, i) => (
                <div className="border-2 my-3 p-3" key={p._id}>
                  <div className="flex justify-between px-2">
                    <div>{p.name}</div>
                    <div>
                    <Ft p={p} i={i}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
})

export default Friend;




