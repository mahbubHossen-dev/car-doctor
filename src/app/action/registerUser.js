'use server'
import bcrypt from 'bcrypt'
import dbConnect from '@/DB/dbConnect';

const registerUser = async (payload) => {
    console.log(payload)
    const userCollection = dbConnect('users')
    const email = payload.email
    const isExist = await userCollection.findOne({ email })

    if (isExist) {
        return isExist
    }

    const passwordHashTag = await bcrypt.hash(payload.password, 10)
    payload.password = passwordHashTag
    console.log(payload)
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