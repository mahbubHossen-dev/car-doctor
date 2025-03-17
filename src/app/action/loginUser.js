'use server'
import bcrypt from 'bcrypt'
import dbConnect, { collectionNamesObj } from '@/DB/dbConnect';


const loginUser =async (payload) => {
    const {email, password} = payload
    const userCollection = dbConnect(collectionNamesObj.userCollection)
    const user = await userCollection.findOne({email}) 

    if(!user) return null

    const isPasswordOk  = await bcrypt.compare(password, user.password)
    if(!isPasswordOk) return null


    return user
};

export default loginUser;

