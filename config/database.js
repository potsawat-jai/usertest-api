import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: '192.168.10.5',
  user: 'maxioperation',
  password: '@abc1234',
  database: 'map_fiber'
});
 
export default db;