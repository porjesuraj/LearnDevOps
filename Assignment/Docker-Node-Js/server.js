const { response } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express()
app.use(bodyParser.json())

app.post('/user/register', (request, response)=>{
    const{ firstname,lastname,email,password } = request.body
    const statement = `insert into user(firstname,lastname,email,password) values('${firstname}','${lastname}','${email}','${password}')`

    db.query(statement,(error,result)=>{
        if(error){
            response.send("error")
        }else{
            response.send({status : 'success', data: result})
        }
    })
})

app.listen(4000,'0.0.0.0', ()=>{
    console.log("Started")
})