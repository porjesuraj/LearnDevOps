const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '192.168.1.3',
    user: 'roor',
    password: 'root',
    database: 'ecommercedb',
    port: 9090,
    connectionLimit: 20
})

module.exports = pool