// importing mysql2 package
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: 'Randomsammicat@05',
        database: 'election'
    },
    console.log('Connected to the election database!')
);

module.exports = db;