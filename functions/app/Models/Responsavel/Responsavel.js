import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import Model from "../Model";

export default class Responsavel extends Model
{
    model = 'responsavel'
    STATUS_CADASTRADO = 201
    async save(data)
    {

        cadastro = await this.insertUpdate(data, this.model)
        if(cadastro){
            return {status: this.STATUS_CADASTRADO, message: "model check"}
        } else {
            return {status: this.STATUS_ERRO, message: cadastro.message}
        }
    }
}