/**
 * Abstract class Controller
 * 
 * @class Controller
 * */
export default class Controller
{
    objRegister = Object;
    cosntructor() 
    {

    }

    /**
     * Método para setar o objeto padrão visível em classes extendidas de Controller
     * 
     * @param {*} obj - Objeto recebido via parametro
     */
    setObjectRegister(obj)
    {
        this.objRegister = obj
    }

    getObjectRegister()
    {
        return this.objRegister
    }

    setValidaContato(contato)
    {
        if(!('email' in contato) || contato.email == '') {
            throw new Error("Email para contato não informado / inválido")
        }

        if(!('celular' in contato) || contato.celular == '') {
            throw new Error("Celular para contato não informado / inválido")   
        }
    }

    setValidaEnredeco(endereco)
    {
        if(!('cep' in endereco) || endereco.cep == '') {
            throw new Error("CEP não informado / inválido")
        }

        if(!('endereco' in endereco) || endereco.endereco == '') {
            throw new Error("Endereco não informado / inválido")
        }

        if(!('numero' in endereco) || endereco.numero == '') {
            throw new Error("Número não informado / inválido")
        }

        if(!('cidade' in endereco) || endereco.cidade == '') {
            throw new Error("Cidade não informado / inválido")
        }

        if(!('uf' in endereco) || endereco.uf == '') {
            throw new Error("Unidade Federativa não informado / inválido")
        }
    }

    setValidapertencentes(pertencentes)
    {
        pertencentes.forEach(aluno => {
            if(!('nome' in aluno) || aluno.nome == '') {
                throw new Error(`Nome do aluno não informado / inválido, aluno: ${aluno.nome}`)
            }

            if(!('documento' in aluno) || aluno.documento == '') {
                throw new Error(`Documento do aluno não informado / inválido, aluno: ${aluno.nome}`)
            }

            if(!('escola_id' in aluno) || aluno.escola_id == '') {
                throw new Error(`Escola do aluno não informado / inválido, aluno: ${aluno.nome}`)
            }

            if(!('periodo' in aluno) || aluno.periodo == '') {
                throw new Error(`Periodo do aluno não informado / inválido, aluno: ${aluno.nome}`)
            }
        });
    }
}