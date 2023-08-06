import React from 'react'
import { useParams } from 'react-router-dom'
import useServiceDetail from '../../../hooks/useServiceDetail';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';


const CheckOut = () => {
  const {ServiceId} = useParams();
  const [service] = useServiceDetail(ServiceId);
  const [user] = useAuthState(auth);


  const handlePlaceOrder =(event)=>{
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: ServiceId,
      address: event.target.address.value,
      phone: event.target.phoneNumber.value
    }

    axios.post('https://genius-car-service-server-kappa.vercel.app/order', order)
    .then(res => {
      const {data} = res;
      if(data.insertedId){
        toast('your order is booked!!!');
        event.target.reset();
      };

    })
  }

  return (
    <div className='w-50 mx-auto'>
        <h2>Please order: {service.name}</h2>

        <form onSubmit={handlePlaceOrder}>
          <input className='w-100 mb-2' type='text' value={user.displayName} name='name' placeholder='please enter your "name"..' required readOnly disabled></input>
          <input className='w-100 mb-2' type='email' value={user.email} name='email' placeholder='Please enter your "Email.."' required readOnly disabled></input>
          <input className='w-100 mb-2' type='text' name='address' placeholder='Please enter your "address".' autoComplete='off' required></input>
          <input className='w-100 mb-2' type='number' name='phoneNumber' placeholder='Please enter your phone "number"' required></input>
          <input className='w-100 mb-2' type='text' placeholder='Please enter your "service".' required></input>
          {/* <input className='w-100 mb-2' type='text' placeholder='name' required></input> */}
          <input className='btn btn-success' type='submit' value='Added'></input>
        </form>
    </div>
  )
}

export default CheckOut