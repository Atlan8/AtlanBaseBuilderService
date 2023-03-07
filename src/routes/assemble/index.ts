import express from "express";
import query from "../../../model/db";
import { AssembleInfo } from "../../types/assemble";
import { formatData } from "../../utils/format";

const assemble = express.Router();

const sql = {
  queryAssemble: `select a.id, a.name, a.total, a.timestramp, a.datetime, concat('{ "name": "', t.name, '", "price":", t.price, ", "link": "', ifnull(t.link, ''), '" }') as cpu from assemble a left join cpu t on 1=1`,
};

assemble.get("/api/getAssembleList", async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");

  const body = req.query;
  if (!body.id) {
    const rows = await query<AssembleInfo[]>(sql.queryAssemble, []);
    console.warn(rows);
    for (let i = 0; i < rows.length; i++) {
      rows[i].cpu = JSON.parse(rows[i].cpu as unknown as string);
      rows[i].datetime = formatData(rows[i].datetime);
    }
    res.send({
      errorCode: 10000,
      msg: "成功",
      data: rows,
    });
  }
});

export default assemble;
