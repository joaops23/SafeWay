import {doc, setDoc} from 'firebase/firestore';
import db from "./../database/connection.js";

export default class Model
{
    constructor()
    {
        this.conn = db
    }

    async insertUpdate(data, model, id = undefined)
    {
        const docRef = await setDoc(doc(db, model, id), data);
        return docRef.id;
    }
}