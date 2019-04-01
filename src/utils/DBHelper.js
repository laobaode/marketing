var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port: "3306",
  database : 'market'
});
 
connection.connect();

export default connection;