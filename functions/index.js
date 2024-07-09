const functions = require('firebase-functions');
admin = require('firebase-admin');
express = require('express')
cors = require('cors')

const db = require("./app/database/connection.js");

app = express();

app.use(cors({origin: true}))

exports.app = functions.https.onRequest(app);