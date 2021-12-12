import { db } from './database';

export const addMember = async() => {

    return await db.getconnection().collection("signuper").insertOne({}).toArray();

};