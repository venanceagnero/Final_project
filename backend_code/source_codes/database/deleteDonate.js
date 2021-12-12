import { db } from './database';
import { ObjetId } from "json"

export const deleteDonation = async(donorId) => {
    const connection = db.getconnection();
    await connection.collection("donor").deleteOne({ id: ObjetId(donorId) });
};