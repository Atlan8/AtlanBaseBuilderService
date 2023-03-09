"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatData = void 0;
/**
 * 格式化时间
 * @param dateStr 时间字符串
 * @param format 格式
 * @returns 格式化后的字符串
 */
function formatData(dateStr, format = "YYYY/MM/DD HH:mm:ss") {
    // if (dateStr.trim() === "") {
    //   throw Error("请传入正确的时间字符串！");
    // }
    const date = new Date(dateStr);
    const yearRE = /([yY]+)/;
    /**
     * 找出年份，然后用日期对象的值替换格式的对应字符
     */
    if (yearRE.test(format)) {
        const match = format.match(yearRE);
        match && match.length > 1 && (format = format.replace(match[1], date.getFullYear() + "").substring(4 - match[1].length));
    }
    const o = {
        "M+": date.getMonth() + 1,
        "[dD]+": date.getDate(),
        "[hH]+": date.getHours(),
        "m+": date.getMinutes(),
        "[sS]+": date.getSeconds(),
    };
    for (const k in o) {
        const kER = new RegExp(`(${k})`);
        if (kER.test(format)) {
            let str = `${o[k]}`;
            const match = format.match(kER);
            // console.warn("---> date replace: ", match, padLeftZero(str));
            match && match.length >= 1 && (format = format.replace(match[1], match[1].length === 1 ? str : padLeftZero(str)));
        }
    }
    return format;
}
exports.formatData = formatData;
function padLeftZero(str) {
    return ("00" + str).slice(str.length);
}
