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
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../../../model/db"));
const format_1 = require("../../utils/format");
const assemble = express_1.default.Router();
const sql = {
    queryAssemble: `select a.id, a.name, a.total, a.timestramp, a.datetime, t.info as cpu, m.info as motherboard, me.info as memory, r.info as radiator, h.info as hardDiskList, g.info as graphicsCard, p.info as powerSupply, c.info as chassis, f.info as fan from assemble a left join cpu t on a.cpu = t.ID left join motherboard m on a.motherboard = m.id left join memory me on a.memory = me.id left join radiator r on a.radiator = r.id left join hard_disk h on a.hardDiskList = h.id left join graphics_card g on a.graphicsCard = g.id left join power_supply p on a.powerSupply = p.id left join chassis c on a.chassis = c.id left join fan f on a.fan = f.id`,
};
assemble.get("/api/getAssembleList", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    const body = req.query;
    if (!body.id) {
        const rows = yield (0, db_1.default)(sql.queryAssemble, []);
        console.warn(rows);
        for (let i = 0; i < rows.length; i++) {
            rows[i].cpu = JSON.parse(rows[i].cpu);
            rows[i].datetime = (0, format_1.formatData)(rows[i].datetime, "yyyy-MM-dd HH:mm:ss");
        }
        res.send({
            errorCode: 10000,
            msg: "成功",
            data: rows,
        });
    }
}));
exports.default = assemble;
