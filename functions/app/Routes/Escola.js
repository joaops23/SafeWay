import express from "express";
import EscolaController from "../Controller/Escola/index.js";

const EscolaRouter = express.Router();
const escolaController = new EscolaController();

EscolaRouter.post('/store', async (req, res) => {
    try{
        escolaController.setObjectRegister(req.body)
        const response = await escolaController.store();
     
        return res.status(response.status).json({'message': response.message});
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})

EscolaRouter.get("/:id", async(req, res) => {
    try{

        const response = await escolaController.findById(req.params.id)

        return res.status(response.status).json(response.data);
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})

EscolaRouter.get("/", async(req, res) => {
    try{

        const response = await escolaController.findAll(req.query);

        return res.status(response.status).json(response.data);
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})


export default EscolaRouter;