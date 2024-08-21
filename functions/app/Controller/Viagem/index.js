import Controller from "../Controller.js";

export default class ViagemController extends Controller
{
    async create()
    {
        this.validarDadosCadastro();
    }

    validarDadosCadastro()
    {
        // => Valida ids dos alunos enviados
        // => valida escola e período
        // => valida id do motorista
        this.setValidaAlunos();
        this.setValidaEscola();
        this.setValidaTurnoEscola();
        this.setValidaMotorista();
    }

    setValidaAlunos()
    {}
}