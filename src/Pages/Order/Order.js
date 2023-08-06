
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  // const location = useLocation();

  // let from = location.state?.from?.pathname || '/';

  useEffect(()=>{
    const getOrders = async()=>{
      const email = user.email
      const url =`https://genius-car-service-server-kappa.vercel.app/order?email=${email}`;
      try{
        const {data} = await axiosPrivate.get(url);
         setOrders(data);
      }
      catch(error){
        console.log(error.message);
        if(error.response.status === 401 || error.response.status === 403){
          signOut(auth);
          navigate('/login');

        }
      }
    }
    getOrders();
    // navigate(from, {replace: true});
  },[user]);

  return (
    <div className='w-50 mx-auto'>
      <h1>
      your order : {orders.length}
      </h1>
      {
        orders.map(order=><h2 key={order._id}>
          {order.email}: {order.service}
        </h2>)
      }
    </div>
  )
}

export default Order