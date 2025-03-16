import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = process.env.MONGODB_URI


export const collectionNamesObj = {
  servicesCollection: 'services',
  userCollection: 'users'
}

export default function dbConnect(collectionName) {
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
    // console.log(collectionName)
    // return console.log(uri)
// return uri
    return client.db(process.env.CAR_DOCTOR_DB).collection(collectionName)
}

