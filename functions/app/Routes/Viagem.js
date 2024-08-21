import express from "express";
import ViagemController from "../Controller/Viagem/index.js";


const ViagemRouter = express.Router();
const viagemController = new ViagemController();

// => Rota para listagem de alunos, escola e descrição da viagem
ViagemRouter.get("/dadosViagem", async(req, res) => {

});

// => Rota para criação da viagem, contendo escola, período, motorista e alunos
ViagemRouter.post('/create', async (req, res) => {
    viagemController.setObjectRegister(req.body);
    // => Aplicar validações de dados de cadastro (de escola, de alunos e motorista)
    const viagem = await viagemController.create();
    // => Criar uma nova viagem com data de início - fim - permitir acompanhamento
    // => retornar id da viagem, hora de início e endereços de parada
});

export default ViagemRouter;