import { db } from './database';
import { ObjetId } from "json"

export const deleteDonation = async(memberId) => {
    const connection = db.getconnection();
    await connection.collection("signuper").deleteOne({ id: ObjetId(memberId) });
};