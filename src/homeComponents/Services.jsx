import { FaArrowRight } from "react-icons/fa";
import dbConnect, { collectionNamesObj } from '@/DB/dbConnect';
import Image from 'next/image';
import Link from "next/link";
const Services = async () => {

  const servicesDB = dbConnect(collectionNamesObj.servicesCollection)
  const servicesData = await servicesDB.find().toArray()

  return (
    <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto'>
      {
        servicesData.map(d => <div key={d._id} className="card bg-base-100 w-96 shadow-sm border">
          <figure className="px-10 pt-10">
            <Image
              src={d.img}
              width={500}
              height={100}
              alt="Shoes"
              className="rounded-xl w-full h-auto object-cover" />
          </figure> 
          <div className="card-body items-center text-center">
            <h2 className="card-title">{d.title}</h2>
            <p>{d.price}</p>
            <div className="card-actions">
              <Link href={`/service/${d._id}`}>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Services;