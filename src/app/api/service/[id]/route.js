import dbConnect, { collectionNamesObj } from "@/DB/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    const {id} = await params
    console.log('params -----',  id)
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection)
    const singleService = await servicesCollection.findOne({ _id: new ObjectId(id) })

    return NextResponse.json(singleService)
}