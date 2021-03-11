// get the client
const mysql = require('mysql2');
 
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: '192.168.1.102 ',
  user: 'root',
  password: 'root',
  database: 'ecommercedb',
  connectionLimit: 20,
  port : 9090
});

module.exports = pool
