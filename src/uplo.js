 import mysql from 'mysql';

 const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'roots',
    database: 'excel',
    port: '3306'
});


module.exports = conn;
 