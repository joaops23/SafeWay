import Controller from "./../Controller.js";
import Responsavel from "../../Models/Responsavel/Responsavel.js";
const ResponsavelModel = new Responsavel();

class ResponsavelController extends Controller 
{
    async store() {
        
        const valida = this.validarDadosCadastro();
        if(!valida.status) {
            return {status: 400, message: valida.message};
        }

        const tratamento = await this.setTrataCamposCadastro();

        if(!tratamento.status) {
            return {status: 400, message: tratamento.message};
        }

        return await ResponsavelModel.save(this.getObjectRegister());
    }


    async findById(id)
    {
        // => Valida se o ID foi enviado
        if (!id || id.length == 0) {
            return {status: 400, message: valida.message};
        }

        const consult = await ResponsavelModel.findById(id);

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

        const consult = await ResponsavelModel.findAll(limit, offset, query.order);

        return {status: 200, data: consult.data}
        
    }

    validarDadosCadastro()
    {
        let id = null;
        try{
            let responsavel = this.getObjectRegister()
            // => validar se foi enviado o id do responsavel/usuario
            if(('id' in responsavel) || responsavel.id != '') {
                id = responsavel.id
            }

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

            return {status: true}
        } catch(err) {
            return {status: false, message: err.message};
        }
    }

    async setTrataCamposCadastro()
    {
        let responsavel = this.getObjectRegister();

        try{
            // => trata documento do responsavel
            responsavel.resp_documento = responsavel.resp_documento.replace(/\-|\./g, "") // Elimina a pontuação que foi enviada.
    
            const consultResponsavel = await ResponsavelModel.getResponsavelByDocumento(responsavel.resp_documento);

            if(consultResponsavel.length && responsavel.id == null) {
                throw new Error("Já existe um responsável cadastrado com este documento!");
            }
    
            // => trata documento dos pertencentes/aluno
            responsavel.resp_pertencentes = this.trataPertencentes(responsavel.resp_pertencentes)
            
            return {status: true}
        } catch(err) {
            return {status: false, message: err.message}
        }
    }

    trataPertencentes(pertencentes)
    {
        pertencentes.map(item => {
            item.documento = item.documento.replace(/\-|\./g, "");
        });

        return pertencentes;
    }
}

export default ResponsavelController;