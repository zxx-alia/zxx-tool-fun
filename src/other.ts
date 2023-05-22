// 获取文件后缀名
export function getFileSuffix(name: string) {
    const suffix = name.substring(name.lastIndexOf(".") + 1, name.length);
    if (suffix === "docx" || suffix === "doc") {
        return "WORD";
    }
    if (suffix === "xls" || suffix === "xlsx") {
        return "EXCEL";
    }
    return suffix.toLocaleUpperCase();
}

/**
 * 格式化行政区
 */
export function formatArea(args: any) {
    let result = "";
    if (args) {
        const value = JSON.parse(args);
        const arr = value.map((item: any) => {
            return item.label;
        });
        result = arr.toString();
    }
    return result;
}

/**
 * 验证数据是否是json数据
 * @param str 验证数据
 * @returns (boolean) 验证结果
 */
export function isJSON(str: any) {
    if (typeof str == "string") {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == "object" && obj) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
}

/**
 * 格式化地址数据
 * @param args 地址原始数据
 * @returns (string) 字符串形式的地址
 */
export function getAddress(args: any): string {
    let res: string = "";
    let resOfIsJSON = isJSON(args);
    if (resOfIsJSON) {
        args = JSON.parse(args);
        res = args.province.name + args.city.name + args.area.name;
    } else {
        res = args;
    }
    return res;
};