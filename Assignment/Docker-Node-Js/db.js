const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '192.168.0.103',
    user: 'root',
    password: 'root',
    database: 'dbname',
    port: 9090,
    connectionLimit: 20
})

module.exports = pool