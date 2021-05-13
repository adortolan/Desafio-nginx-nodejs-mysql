const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db', 
    user: 'rootdb',   
    password: 'rootdb',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `insert into modulo(descricao) values('node')`
connection.query(sql)

app.get('/',(req,res)=>{
    connection.query(`select * from modulo`,function (error, results, fields){
     if (error){
         if(error.code =="ECONNREFUSED")
             return res.status(503).send({error : "Aguardando Conexão Com Bando de Dados! Tente novamente mais tarde"})
         return res.status(500).send({error: "Erro ao acessar banco de dados!"})
     }     
     return res.send(results);
 });
})

app.listen(port, () =>{
    console.log('Rodando na porta: ' + port)
})