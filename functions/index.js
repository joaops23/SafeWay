import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import ResponsavelRouter from "./app/Routes/Responsavel.js";
import EscolaRouter from './app/Routes/Escola.js';
import MotoristaRouter from './app/Routes/Motorista.js';
import ViagemRouter from "./app/Routes/Viagem.js";

const app = express();

app.get("/", (req, res) => {
    return res.send("success");
})
app.use(cors({origin: true}))
app.use(express.json());

app.use("/responsavel", ResponsavelRouter);
app.use('/escola', EscolaRouter);
app.use('/motorista', MotoristaRouter);
app.use('/viagem/gerador', ViagemRouter);
// app.use('/viagem/motorista/');
// app.use('/viagem/responsavel/');

const application = functions.https.onRequest(app);
export default application;