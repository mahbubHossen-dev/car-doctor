'use server'
import jsonFile from '../../../public/services.json'
const serviceFetch =async () => {
    
    const res = await fetch(jsonFile)
    const data = await res.json()
    console.log(data)
    return data

    
};

export default serviceFetch;