import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./src/routes/router";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// 配置解析表单 POST 请求体，需要在路由挂载之前完成
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
