'use server'

import dbConnect, { collectionNamesObj } from '@/DB/dbConnect';

const registerUser = async (payload) => {
    console.log(payload)
    const userCollection = dbConnect(collectionNamesObj.userCollection)
    const email = payload.email
    const isExist = await userCollection.findOne({email})

    if(isExist){
        return isExist
    }

    try {
        const result = await userCollection.insertOne(payload)
         return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString(), // ObjectId -> String
        };
          
    } catch (error) {
        console.log(error)
    }
};

export default registerUser;