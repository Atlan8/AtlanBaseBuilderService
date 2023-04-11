import express from "express";
import query from "../../../model/db";
import { AccessoriesInfoExt, AssembleInfo } from "../../types/assemble";
// import { formatData } from "../../utils/format";
import { parseRows } from "./common";

const assemble = express.Router();

const sql = {
  queryAssemble: `select a.id, a.name, a.total, a.timestramp, a.datetime, t.info as cpu, m.info as motherboard, me.info as memory, r.info as radiator, h.info as hardDiskList, g.info as graphicsCard, p.info as powerSupply, c.info as chassis, f.info as fan from assemble a left join cpu t on a.cpu = t.ID left join motherboard m on a.motherboard = m.id left join memory me on a.memory = me.id left join radiator r on a.radiator = r.id left join hard_disk h on a.hardDiskList = h.id left join graphics_card g on a.graphicsCard = g.id left join power_supply p on a.powerSupply = p.id left join chassis c on a.chassis = c.id left join fan f on a.fan = f.id where a.name LIKE ?`,
  queryAssembleById: `select a.id, a.name, a.total, a.timestramp, a.datetime, t.info as cpu, m.info as motherboard, me.info as memory, r.info as radiator, h.info as hardDiskList, g.info as graphicsCard, p.info as powerSupply, c.info as chassis, f.info as fan from assemble a left join cpu t on a.cpu = t.ID left join motherboard m on a.motherboard = m.id left join memory me on a.memory = me.id left join radiator r on a.radiator = r.id left join hard_disk h on a.hardDiskList = h.id left join graphics_card g on a.graphicsCard = g.id left join power_supply p on a.powerSupply = p.id left join chassis c on a.chassis = c.id left join fan f on a.fan = f.id where a.id = ?`,
};

assemble.get("/api/getAssembleList", async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");

  const body = req.query;
  if (!body.id) {
    const rows = await query<AssembleInfo[]>(sql.queryAssemble, [`%${body.keyword}%`]);
    console.warn(rows);
    const _rows = parseRows(rows);
    res.send({
      errorCode: 10000,
      msg: "成功",
      data: _rows,
    });
  } else {
    res.send({
      errorCode: 50001,
      msg: "未知错误",
      data: null,
    });
  }
});

assemble.get("/api/getAssembleListById", async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");

  const body = req.query;
  if (!!body.id) {
    const rows = await query<AssembleInfo[]>(sql.queryAssembleById, [body.id]);
    console.warn(rows);
    const _rows = parseRows(rows);
    res.send({
      errorCode: 10000,
      msg: "成功",
      data: _rows.length > 0 ? _rows[0] : null,
    });
  } else {
    res.send({
      errorCode: 50001,
      msg: "未知错误",
      data: null,
    });
  }
});

assemble.post("/api/assemble/edit", async (req, res) => {
  const body = req.body;

  console.log("---> post 请求体: ", body);
});

export default assemble;
