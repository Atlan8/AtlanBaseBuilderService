"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRows = void 0;
const format_1 = require("../../utils/format");
/** 需要处理的key map */
const rowKeyMap = ["cpu", "motherboard", "graphicsCard", "memory", "hardDiskList", "radiator", "fan", "powerSupply", "chassis"];
/**
 * 格式化输出结果
 * @param rows 查询数据库的结果
 * @returns
 */
const parseRows = (rows) => {
    if (!Array.isArray(rows)) {
        return rows;
    }
    for (let i = 0; i < rows.length; i++) {
        for (const key in rows[i]) {
            if (rowKeyMap.includes(key)) {
                rows[i][key] = JSON.parse(rows[i][key]);
            }
        }
        // rows[i].cpu = JSON.parse(rows[i].cpu as unknown as string);
        // rows[i].motherboard = JSON.parse(rows[i].motherboard as unknown as string);
        // rows[i].graphicsCard = JSON.parse(rows[i].graphicsCard as unknown as string);
        // rows[i].memory = JSON.parse(rows[i].memory as unknown as string);
        // rows[i].hardDiskList = [JSON.parse(rows[i].hardDiskList as unknown as string)];
        // rows[i].radiator = JSON.parse(rows[i].radiator as unknown as string);
        // rows[i].fan = JSON.parse(rows[i].fan as unknown as string);
        // rows[i].powerSupply = JSON.parse(rows[i].powerSupply as unknown as string);
        // rows[i].chassis = JSON.parse(rows[i].chassis as unknown as string);
        rows[i].datetime = (0, format_1.formatData)(rows[i].datetime, "yyyy-MM-dd HH:mm:ss");
    }
    return rows;
};
exports.parseRows = parseRows;
