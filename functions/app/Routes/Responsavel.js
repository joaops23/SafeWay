import express from "express";
import ResponsavelController from "../Controller/Responsavel/index.js";

const ResponsavelRouter = express.Router();
const responsavelController = new ResponsavelController();

ResponsavelRouter.post('/store', (req, res) => {
    try{
        responsavelController.setObjectRegister(req.body)
        const response = responsavelController.store();
     
        return res.status(response.status).json({'message': response.message});
    } catch(err) {
        console.error(err)
        return res.status(500).send(err)
    }
})


export default ResponsavelRouter;