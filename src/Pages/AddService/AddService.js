import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const AddService = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const url =`https://genius-car-service-server-kappa.vercel.app/service`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => console.log(result));
  }
  
  return (
    <div className='w-50 mx-auto'>
        <h1>This is for the adding service.</h1>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")}/>
      <input className='mb-2' placeholder='PhotoUrl' type="text" {...register("img")}/>
      <input type="submit" value='Add Service' />
    </form>
    </div>
  )
}

export default AddService