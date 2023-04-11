import { AssembleInfo } from "../../types/assemble";
import { formatData } from "../../utils/format";

/** 需要处理的key map */
const rowKeyMap = ["cpu", "motherboard", "graphicsCard", "memory", "hardDiskList", "radiator", "fan", "powerSupply", "chassis"];

/**
 * 格式化输出结果
 * @param rows 查询数据库的结果
 * @returns
 */
export const parseRows = <T>(rows: T): T => {
  if (!Array.isArray(rows)) {
    return rows;
  }

  for (let i = 0; i < rows.length; i++) {
    for (const key in rows[i]) {
      if (rowKeyMap.includes(key)) {
        rows[i][key] = JSON.parse(rows[i][key] as unknown as string);
        key === "hardDiskList" && (rows[i][key] = [rows[i][key]]);
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

    rows[i].datetime = formatData(rows[i].datetime, "yyyy-MM-dd HH:mm:ss");
  }

  return rows;
};

/**
 * 搜索数组
 * @param rows
 * @param keyword
 * @returns
 */
export const searchByWord = <T extends AssembleInfo>(rows: T[], keyword?: string): T[] => {
  if (!!keyword && Array.isArray(rows)) {
    let _rows = [];
    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];
      if (item.name && item.name.indexOf(keyword) !== -1) {
        _rows.push(item);
      }
    }
    return _rows;
  }
  return rows;
};
