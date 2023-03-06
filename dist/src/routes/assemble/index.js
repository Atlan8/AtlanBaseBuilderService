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
const assemble = express_1.default.Router();
const sql = {
    queryAssemble: "SELECT * FROM `assemble`",
};
assemble.get("/api/getAssembleList", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    const body = req.query;
    if (!body.id) {
        const rows = yield (0, db_1.default)(sql.queryAssemble, []);
        console.warn(rows);
        res.send("Express + TypeScript Server");
    }
}));
exports.default = assemble;
