import mysql from "mysql";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "asdfghjkl551,H",
  database: "atlan_base",
  port: 3306,
});

/**
 * 接收一个 sql 语句，以及所需 value
 * 这里第二个参数使用 value 是因为可以使用占位符 ?
 * 例如：query(`slect * from bubble_mall where id = ?`, [1])
 * @param sql
 * @param value
 * @returns
 */
const query = <T>(sql: string, value: any[]) => {
  return new Promise<T>((resolve, reject) => {
    pool.getConnection((err: Error, connection: any) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, value, (_err: Error, rows: T) => {
          if (_err) {
            console.error(_err);
            reject(_err);
          } else {
            resolve(rows);
          }

          // 结束会话
          connection.release();
        });
      }
    });
  });
};

export default query;
