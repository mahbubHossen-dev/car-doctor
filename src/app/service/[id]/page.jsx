import dbConnect from '@/DB/dbConnect'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'

export default async function ServiceDetails({ params }) {
    const { id } = await params

    const singleService = await dbConnect('services').findOne({ _id: new ObjectId(id) })

    // console.log(data)
    console.log(singleService.facility)
    return (
        <div className='w-11/12 mx-auto'>
            {/* {params} */}
            <section className='flex justify-center'>
                <figure className='relative w-full flex justify-center'>
                    <Image src={'/assets/images/checkout/checkout.png'} width={1200} height={500} alt='Banner' />
                    <div className='flex items-center w-full h-full absolute'>
                        <div className=''>
                            <h2 className=' left-6 text-2xl font-medium text-white'>Service Details</h2>
                        </div>
                    </div>

                    <div className='border absolute bottom-0 right-[40%] px-6 py-2 bg-red-400'>
                        <p>Home/Service Details</p>
                    </div>
                </figure>
            </section>

            <div className='grid grid-cols-4 gap-8 mt-8'>
                <div className='col-span-3'>
                    <Image src={singleService.img} width={400} height={200} alt={singleService.title} />
                </div>
                <div className='bg-gray-300 p-6 col-span-1'>
                    <h2>Services</h2>
                    <ul>
                    {
                        singleService?.facility.map((f, idx) => <li className='p-3 bg-white my-2' key={idx}>{f.name}</li>)
                    }
                </ul>
                </div>
            </div>

            <div>
                
                
            </div>
        </div>
    )
}
