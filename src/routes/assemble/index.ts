import express from "express";
import query from "../../../model/db";
import { AssembleInfo } from "../../types/assemble";

const assemble = express.Router();

const sql = {
  queryAssemble: "SELECT * FROM `assemble`",
};

assemble.get("/api/getAssembleList", async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");

  const body = req.query;
  if (!body.id) {
    const rows = await query<AssembleInfo>(sql.queryAssemble, []);
    console.warn(rows);
    res.send("Express + TypeScript Server");
  }
});

export default assemble;
