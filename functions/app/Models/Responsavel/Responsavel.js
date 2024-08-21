import { collection, getDocs, query, where } from "firebase/firestore";
import Model from "../Model.js";

export default class Responsavel extends Model
{

    constructor()
    {
        super();
        this.model = 'responsavel';
    }

    async getResponsavelByDocumento(documento)
    {
        let arrayResponsaveis = [];
        if((typeof documento == 'undefined') && documento.length == 0) {
            throw new Error("Documento não informado");
        }

        const responsaveis = await collection(this.conn, this.model)
        const q = query(responsaveis, where("resp_documento", "==", documento))
        const docs = await getDocs(q);

        docs.forEach((item) => {
            arrayResponsaveis.push({"id": item.id, "data": item.data()});
        })

        return arrayResponsaveis;
    }
}