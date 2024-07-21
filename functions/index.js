import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import ResponsavelRouter from "./app/Routes/Responsavel.js";

const app = express();

app.get("/", (req, res) => {
    return res.send("success");
})
app.use(cors({origin: true}))
app.use(express.json());
app.use("/responsavel", ResponsavelRouter);

const application = functions.https.onRequest(app);
export default application;