import Controller from "./../Controller.js";
import Responsavel from "../../Models/Responsavel/Responsavel.js";
const ResponsavelModel = new Responsavel();

class ResponsavelController extends Controller 
{
    store = () => {
        
        const valida = this.#validarDadosCadastro()
        if(!valida.status) {
            return {status: 400, message: valida.message}
        }

        return ResponsavelModel.save(this.getObjectRegister)
    }

    #validarDadosCadastro = () => {
        let id = null;
        try{
            let responsavel = this.getObjectRegister()
            // => validar se foi enviado o id do responsavel/usuario
            if(('id' in responsavel) || responsavel.id != '') {
                id = responsavel.id
            }

            if(id) {
                // => se não for enviado o id, validar se os demais atributos de entrada foram enviados
                //=> validar: nome
                if(!('resp_nome' in responsavel) || responsavel.resp_nome == '') {
                    throw new Error("Nome não informado / inválido!");
                }
    
                //=> validar: CPF
                if(!('resp_documento' in responsavel) || responsavel.resp_documento == '') {
                    throw new Error("Documento não informado / inválido!");
                }
    
                //=> validar: endereco
                if(!('resp_endereco' in responsavel) || responsavel.resp_endereco == '') {
                    throw new Error("Endereço não informado / inválido!");
                }
                this.setValidaEnredeco(responsavel.resp_endereco)
                
                //=> validar: contato
                if(!('resp_contato' in responsavel) || responsavel.resp_contato == '') {
                    throw new Error("Contato não informado / inválido!");
                }
                this.setValidaContato(responsavel.resp_contato)

                //=> validar: pertencentes
                if(!('resp_pertencentes' in responsavel) || responsavel.resp_pertencentes == '') {
                    throw new Error("Pertencentes não informados / inválidos!");
                }
                this.setValidapertencentes(responsavel.resp_pertencentes)
            }

            return {status: true}
        } catch(err) {
            return {status: false, message: err.message};
        }

    }
}

export default ResponsavelController;