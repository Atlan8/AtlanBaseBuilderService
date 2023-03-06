"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const pool = mysql_1.default.createPool({
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
const query = (sql, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            else {
                connection.query(sql, value, (_err, rows) => {
                    if (_err) {
                        console.error(_err);
                        reject(_err);
                    }
                    else {
                        resolve(rows);
                    }
                    // 结束会话
                    connection.release();
                });
            }
        });
    });
};
exports.default = query;
