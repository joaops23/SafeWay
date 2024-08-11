import { initializeApp } from 'firebase/app';
import 'dotenv/config';
import fs from "fs";
import { getFirestore } from 'firebase/firestore';

// Resgata a chave do proprietário firebase
const _dirname = process.cwd()
const json = JSON.parse(fs.readFileSync( _dirname + '/config/secret.json', 'utf8'));

const app = initializeApp(json)

const db = getFirestore(app);

export default db;