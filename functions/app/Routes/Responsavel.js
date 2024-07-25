import express from "express";
import ResponsavelController from "../Controller/Responsavel/index.js";

const ResponsavelRouter = express.Router();
const responsavelController = new ResponsavelController();

ResponsavelRouter.post('/store', async (req, res) => {
    try{
        responsavelController.setObjectRegister(req.body)
        const response = await responsavelController.store();
     
        return res.status(response.status).json({'message': response.message});
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})

ResponsavelRouter.get("/:id", async(req, res) => {
    try{

        const response = await responsavelController.findById(req.params.id)

        return res.status(response.status).json(response.data);
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})


export default ResponsavelRouter;