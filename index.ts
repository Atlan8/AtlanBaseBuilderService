import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./src/routes/router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

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
