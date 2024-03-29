import React from 'react'
import useServices from '../../hooks/useServices'

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure.');

        if(proceed){
            const url = `https://genius-car-service-server-kappa.vercel.app/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }

  return (
    <div className='w-50 mx-auto'>
        <h1>Manage your service.</h1>
        {
            services.map(service => <div key={service._id}>
                <h3>{service.name}</h3>
                <button onClick={()=>handleDelete(service._id)}>X</button>
            </div>)
        }

    </div>
  )
}

export default ManageService