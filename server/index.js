const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sss",
})

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const house = req.body.house;
    const phone = req.body.phone;
    const responsible = req.body.responsible;

    bcrypt.hash(password, saltRounds, (error, hash) => {
        db.query("INSERT INTO user (name, email, password, idhouse, phone, responsible) VALUES (?, ?, ?, ?, ?, ?)", [name, email, hash, house, phone, responsible], function (err, result) {
            if(err){
                res.send({msg: "Erro ao cadastrar usuário. Verifique se os campos foram preechidos corretamente!"});
            }
            res.send({msg: "Usuário cadastrado com sucesso!"});
        });
    });  
});

app.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT email, password FROM user WHERE email = ?", [email], function(err, result) {
        if(err){
            res.send(err);
        }
        if(result.length > 0) {
            bcrypt.compare(password, result[0].password).then(function(result) {
                if(result){
                    res.send({msg: "true"});
                }else{
                    res.send({msg: "false"});
                }
            }); 
        }else{
            res.send({msg: "Usuário não encontrado!"});
        }
    });
});

app.listen(3001, function () {
    console.log('Rodando na porta 3001')
});
