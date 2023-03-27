// //upgraded mysql package
// const mysql = require('mysql2/promise');

// require('dotenv/config');

// //this is better than conn, conn cteates errors later, because it ends the connection for you 
// const pool = mysql.createPool({

//     connectionLimit: 10,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DATABASE,

// });

// module.exports = pool;