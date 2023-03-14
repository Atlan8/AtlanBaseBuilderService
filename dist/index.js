"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./src/routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// 配置解析表单 POST 请求体，需要在路由挂载之前完成
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// 解决跨域问题
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3100");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    // res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "*");
    // res.header('Content-Type', 'application/json;charset=utf-8');
    res.header("Content-Type", "application/x-www-form-urlencoded");
    next();
});
// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });
// 挂载路由
app.use(router_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
