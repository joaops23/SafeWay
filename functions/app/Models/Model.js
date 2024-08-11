import {doc, setDoc, getDoc, collection, orderBy, getDocs, query, limit} from 'firebase/firestore';
import db from "./../database/connection.js";

export default class Model
{
    constructor()
    {
        this.conn = db

        this.STATUS_CADASTRADO = 201
        this.STATUS_ERRO = 500
    }

    async save(data)
    {
        // => Tratamento do campo id
        data.id = (typeof id == "undefined") ? this.newID() : data.id;

        const cadastro = await this.insertUpdate(data, this.model, data.id)
        if(cadastro.status == 'Success'){
            return {status: this.STATUS_CADASTRADO, message: "Registro Inserido / Atualizado com sucesso!"}
        } else {
            return {status: this.STATUS_ERRO, message: cadastro.message}
        }
    }

    newID()
    {
        const id = Math.floor(Date.now() * Math.random()).toString(36)
        return id
    }

    async insertUpdate(data, model, id)
    {
        try{
            //=> Se a requisição for finalizada corretamente, retorna true
            await setDoc(doc(this.conn, model, id), data);
            return {status: "Success"};
        } catch(err) {

            //=> Caso contrário, retorna um erro
            console.error(err)
            return {status: "Error", message: "Erro de conexão com base de dados, entre em contato com o administrador do sistema urgente!"};
        }
    }

    /**
     * Busca um registro na model com o Id enviado
     * @param {string} id - Id do registro
     */
    async findById(id)
    {
        if((typeof id == 'undefined') && id.length == 0) {
            return;
        }
        const docRef = doc(this.conn, this.model, id)
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
            return {status: "Success", data: docSnap.data()}
        } else {
            const message = `Documento | id: ${id} | Entidade: ${this.model} | Não encontrado!`;
            return {status: "Error", message: message};
        }
    }

    async findAll(lmt, ofs, order = undefined)
    {
        const q = query(
            collection(this.conn, this.model),
            orderBy(order || 'id'),
            limit(lmt)
        );

        const consult = await getDocs(q);

        const returnData = [];
        consult.forEach((item) => {
            returnData.push({"id": item.id, 'data': item.data()});
        })

        return {data: returnData};
    }
}