/**
 *  时间格式
 * @param data -> 时间
 * @param fmt -> 格式化方式（如： yyyy-MM-dd）
 */
export function formatDate(data: any, fmt: string) {
    const date = new Date(data);
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    }
    const o: any = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
    };
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            const str = o[k] + "";
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? str : padLeftZero(str)
            );
        }
    }
    return fmt;
}

function padLeftZero(str: any) {
    return ("00" + str).substr(str.length);
}

/**
 * 获取当前时间n天之后的日期
 */
export function getAfterDate15(n: number) {
    let nowDate = new Date();
    return formatDate(new Date().setDate(nowDate.getDate() + Number(n)), "yyyy-MM-dd");
}