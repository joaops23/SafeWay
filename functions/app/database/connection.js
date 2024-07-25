import { initializeApp } from 'firebase/app';
import admin from 'firebase-admin';
import 'dotenv/config';
import {fileURLToPath} from 'url';
import fs from "fs";
import path from 'path';
import { getFirestore } from 'firebase/firestore';

// Resgata a chave do proprietário firebase
const _dirname = path.dirname(fileURLToPath(import.meta.url))
const json = JSON.parse(fs.readFileSync( _dirname + '/../../config/secret.json', 'utf8'));

const app = initializeApp(json)

const db = getFirestore(app);

export default db;