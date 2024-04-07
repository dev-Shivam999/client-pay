import axios from 'axios';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { re } from '../store/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FreindApi } from '../utils/homeApi';
import Ft from '../components/Ft';
import FriendDta from '../components/FriendDta';
import Frame from '../components/Frame';

const Friend = memo(() => {
    
  const navigate = useNavigate();
  
  const [err, setEr] = useState(false);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  
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
          <Frame>

        <FriendDta/>
          </Frame>
        )}
      </div>
    );
})

export default Friend;




