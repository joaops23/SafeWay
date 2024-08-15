import Controller from "./../Controller.js";
import Motorista from "../../Models/Motorista/Motorista.js";
const MotoristaModel = new Motorista();

export default class MotoristaController extends Controller
{
    async store() {
        
        const valida = this.validarDadosCadastro();
        if(!valida.status) {
            return {status: 400, message: valida.message};
        }

        return await MotoristaModel.save(this.getObjectRegister());
    }


    async findById(id)
    {
        // => Valida se o ID foi enviado
        if (!id || id.length == 0) {
            return {status: 400, message: valida.message};
        }

        const consult = await MotoristaModel.findById(id);

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

        const consult = await MotoristaModel.findAll(limit, offset, query.order);

        return {status: 200, data: consult.data}
        
    }

    validarDadosCadastro()
    {
        let id = null;
        try{
            let motorista = this.getObjectRegister()
            // => validar se foi enviado o id do motorista/usuario
            if(('id' in motorista) || motorista.id != '') {
                id = motorista.id
            }
            
            if(!id) {
                // => se não for enviado o id, validar se os demais atributos de entrada foram enviados
                //=> validar: nome
                if(!('mot_nome' in motorista) || motorista.mot_nome == '') {
                    throw new Error("Nome não informado / inválido!");
                }
    
                //=> validar: endereco
                if(!('mot_endereco' in motorista) || motorista.mot_endereco == '') {
                    throw new Error("Endereço não informado / inválido!");
                }
                this.setValidaEnredeco(motorista.mot_endereco)
                
                //=> validar: contato
                if(!('mot_contato' in motorista) || motorista.mot_contato == '') {
                    throw new Error("Contato não informado / inválido!");
                }
                this.setValidaContato(motorista.mot_contato)

                if(!('veiculo' in motorista) || motorista.veiculo == '') {
                    throw new Error("Informações sobre o veículo do motorista não informadas!");
                }

                this.setValidaVeiculo(motorista.veiculo);
            }

            return {status: true}
        } catch(err) {
            return {status: false, message: err.message};
        }

    }
}