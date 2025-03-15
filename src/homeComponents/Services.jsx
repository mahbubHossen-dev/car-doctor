'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
const Services = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/services.json')
        .then((res) => res.json())
        .then((data) => setData(data));
        
    }, [])


    return (
        <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto'>
            {
                data.map(d => <div key={d._id} className="card bg-base-100 w-96 shadow-sm border">
                    <figure className="px-10 pt-10">
                      <Image
                        src={d.img}
                        width={300} 
                        height={150}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{d.title}</h2>
                      <p>{d.price}</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                  )
            }
        </div>
    );
};

export default Services;