// 字符串相关

/**
 * 获取字符串的码点长度 -- 实际能看见的字符长度
 * @param {string} str 目标字符串
 * @returns {number} 字符长度
 */
export function pointLength(str: string) {
    let len = 0;
    for (let i = 0; i < str.length;) {
        const codePoint = str.codePointAt(i) as number;
        i += codePoint > 65535 ? 2 : 1;
        // i += codePoint > 0xffff ? 2 : 1; // 16进制
        len++;
    }
    return len;
};

/**
 * 获取字符串对应下标的字符 -- 码点下标
 * @param {string} str 目标字符串
 * @param {number} index 获取的码点下标对应的字符
 * @returns {string} 对应字符
 */
export function pointAt(str: string, index: number) {
    let curIndex = 0;
    for (let i = 0; i < str.length;) {
        const codePoint = str.codePointAt(i) as number;
        if (curIndex === index) {
            return String.fromCodePoint(codePoint);
        }
        i += codePoint > 65535 ? 2 : 1;
        curIndex++;
    }
};

/**
 * 字符串截取，根据码点下标进行截取
 * @param {string} str 源字符串
 * @param {number} start 开始截取下标，默认为字符串开始
 * @param {number} end 截取结束下标，默认为字符串码点长度
 * @returns {string} 截取的目标字符串结果
 */
export function sliceByPoint(str: string, start = 0, end = pointLength(str)) {
    let result = "";
    for (let i = start; i < end; i++) {
        console.log(i, end);
        result += pointAt(str, i);
    }
    return result;
};