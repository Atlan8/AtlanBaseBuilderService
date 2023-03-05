const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "asdfghjkl551,H",
  database: "atlanbase",
});

const query = (sql: string, callback: (_err: Error, rows: any) => void) => {
  pool.getConnection((err: Error, connection: any) => {
    connection.query(sql, (_err: Error, rows: any) => {
      callback(_err, rows);
      connection.release();
    });
  });
};

export default query;
