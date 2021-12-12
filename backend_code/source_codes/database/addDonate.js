import { db } from './database';

export const AddDonate = async() => {

    return await db.getconnection().collection("donor").insertOne({}).toArray();

};