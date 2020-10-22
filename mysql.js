//https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
//Hvordan virker det:
//Man skal kører docker pull mysql:5.7 da den version virker bedst når man leger med ting uden https.
//Man skal huske at gå i kitematic og tilføje MYSQL_ROOT_PASSWORD til en værdi eller crasher dit lort. 
//root er user og pwd er det du tilføjede før.
//npm install mysql eller mysql2 jeg ved ikke rigtig hvad forskellen er :P

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwdtest",
    port: "3306",
    database: "mydb"
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql1 = "INSERT INTO bruh (name) VALUES ('simon')";
    con.query(sql1, function (err, result) {
        if (err) throw err;
    });
    var sql2 = "SELECT * FROM bruh";
    con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});