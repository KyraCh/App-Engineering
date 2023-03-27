var mysql = require('mysql');

var mysql_user = {
    host:'localhost',
    user: "****",
    password: '****',
    database: "team6"
};

var connection = mysql.createConnection(mysql_user, {multipleStatements: true});
// {multipleStatements: true}用于开启多条搜索语句的查询

connection.connect()

module.exports = {
    mysql //将此模块暴露出去
};



// var e1 = "INSERT INTO students (name, address) Values ('Peter Smith', '52 Gower Street')";
// var e2 = "UPDATE students SET address = '57 Great Russell Street' WHERE address = '52 Gower Street'";
// var e3 = "Delete from students WHERE address = '52 Gower Street'";
// var e4 = "SELETE * FROM students";
// connection.connect(function (err){
//     if (err) throw err;
//     console.log("Connected!");
//     connection.query(e1, function (err, result){
//         if  (err) throw err;
//         console.log("1 record inserted")
//     })
// });