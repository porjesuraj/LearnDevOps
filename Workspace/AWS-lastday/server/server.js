const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors('*'))

app.get('/product', (request, response) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dac',
    password: 'password',
    database: 'finaldb',
    port: 3306
  })

  connection.query('select * from product', (error, products) => {
    connection.close()
    response.send({
      status: 'success',
      data: products
    })
  })
})

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})

            