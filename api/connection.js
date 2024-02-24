const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Ankit@1997',
    database: 'test',
    authPlugin: 'mysql_native_password' // Set the authentication method
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to Db:', err.stack);
        return;
    }
    console.log('Connection established');
});

module.exports = connection;