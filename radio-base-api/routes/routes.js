const express = require('express');
const mysql = require('mysql');
const { config } = require('../config')

const bodyParser = require('body-parser')
const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const DB_NAME = encodeURIComponent(config.db_name);
const DB_HOST = encodeURIComponent(config.db_host);


console.log("datos", DB_HOST, USER, PASSWORD, DB_NAME);
const connection = mysql.createConnection({
    host: DB_HOST,
    user: USER,
    password: PASSWORD,
    database: DB_NAME
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

function dataApi(app) {
    

    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(bodyParser.json())
    const router = express.Router();
    app.use("/api/data", router);

    router.post("/buscar", async function (req, res, next) {


        console.log("/buscar", req.body.params);
        try {
            connection.query(`SELECT * from telcel WHERE trafico = ${req.body.params}  limit 1000;`, function (error, results, fields) {
                if (error) throw error;
                res.status(200).json({
                    data: results,
                    message: 'data list'
                })
            });

        } catch (error) {
            next(err);
        }
    })

    router.get("/", async function (req, res, next) {
        try {
            connection.query(`SELECT * from telcel limit 1000;`, function (error, results, fields) {
                if (error) throw error;
                res.status(200).json({
                    data: results,
                    message: 'data list'
                })
            });

        } catch (error) {
            next(err);
        }
    })
}

module.exports = dataApi;