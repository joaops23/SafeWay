import Controller from "./../Controller.js";
import Escola from "../../Models/Escola/Escola.js";
const EscolaModel = new Escola();

export default class EscolaController extends Controller
{
    async store() {
        
        const valida = this.validarDadosCadastro();
        if(!valida.status) {
            return {status: 400, message: valida.message};
        }

        return await EscolaModel.save(this.getObjectRegister());
    }


    async findById(id)
    {
        // => Valida se o ID foi enviado
        if (!id || id.length == 0) {
            return {status: 400, message: valida.message};
        }

        const consult = await EscolaModel.findById(id);

        if(consult.status == 'Success') {
            return {status: 200, data: consult.data};
        } else {
            return {status: 404, data: consult.message};
        }
    }

    async findAll(query)
    {
        const limit = query.limit | 10;
        const offset = query.offset | 0;

        const consult = await EscolaModel.findAll(limit, offset, query.order);

        return {status: 200, data: consult.data}
        
    }

    validarDadosCadastro()
    {
        let id = null;
        try{
            let escola = this.getObjectRegister()
            // => validar se foi enviado o id do escola/usuario
            if(('id' in escola) || escola.id != '') {
                id = escola.id
            }
            
            if(!id) {
                // => se não for enviado o id, validar se os demais atributos de entrada foram enviados
                //=> validar: nome
                if(!('esc_nome' in escola) || escola.esc_nome == '') {
                    throw new Error("Nome não informado / inválido!");
                }
    
                //=> validar: endereco
                if(!('esc_endereco' in escola) || escola.esc_endereco == '') {
                    throw new Error("Endereço não informado / inválido!");
                }
                this.setValidaEnredeco(escola.esc_endereco)
                
                //=> validar: contato
                if(!('esc_contato' in escola) || escola.esc_contato == '') {
                    throw new Error("Contato não informado / inválido!");
                }
                this.setValidaContato(escola.esc_contato)

                //=> validar: períodos
                if(!('periodos' in escola) || escola.periodos == '' || escola.length == 0){
                    throw new Error("Períodos de funcionamento não informado / inválido!");
                }

                this.setValidaPeriodos(escola.periodos);
            }

            return {status: true}
        } catch(err) {
            return {status: false, message: err.message};
        }

    }
}