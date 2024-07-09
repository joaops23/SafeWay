admin = require('firebase-admin');
require('dotenv').config()

// Resgata a chave do proprietário firebase
var serviceAccount = require('./../../config/secret.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
})

const db = admin.firestore();

module.exports = db