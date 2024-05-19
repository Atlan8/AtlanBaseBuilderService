"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const pool = promise_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mysql",
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
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        // pool.getConnection((err: ErrnoException | null, connection: PoolConnection) => {
        //   if (err) {
        //     reject(err);
        //   } else {
        //     connection.query(sql, value, (_err: Error, rows: T) => {
        //       if (_err) {
        //         console.error(_err);
        //         reject(_err);
        //       } else {
        //         resolve(rows);          
        //       }
        //       // 结束会话
        //       connection.release();
        //     });
        //   }
        // });
        const conn = yield pool.getConnection();
        const [results, fields] = yield conn.query(sql, value);
        console.log('---> ', results);
        resolve(results);
        // Don't forget to release the connection when finished!
        pool.releaseConnection(conn);
    }));
};
exports.default = query;
