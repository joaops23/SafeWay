import express from "express";
import MotoristaController from "../Controller/Motorista/index.js";

const MotoristaRouter = express.Router();
const motoristaController = new MotoristaController();

MotoristaRouter.post('/store', async (req, res) => {
    try{
        motoristaController.setObjectRegister(req.body)
        const response = await motoristaController.store();
     
        return res.status(response.status).json({'message': response.message});
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})

MotoristaRouter.get("/:id", async(req, res) => {
    try{

        const response = await motoristaController.findById(req.params.id)

        return res.status(response.status).json(response.data);
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})

MotoristaRouter.get("/", async(req, res) => {
    try{

        const response = await motoristaController.findAll(req.query);

        return res.status(response.status).json(response.data);
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})


export default MotoristaRouter;