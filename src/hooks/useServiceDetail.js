import { useEffect, useState } from 'react';

const useServiceDetail = ServiceId => {
    const [service, setService] = useState({});

    useEffect(() =>{
      const url =`https://genius-car-service-server-kappa.vercel.app/service/${ServiceId}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
    },[ServiceId]);
  
  return [service]
}

export default useServiceDetail;