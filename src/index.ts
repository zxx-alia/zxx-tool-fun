/**
 * 返回传入的日期是今年的第几天,如果不传参数则默认是当前日期
 * @param date (Data | string)传入日期
 * @returns (number)
 */
export const dayOfYear = (date?: Date | string): number => {
    let formatDate = null;
    if (!date) {
      formatDate = new Date();
    } else {
      formatDate = typeof date === "string" ? new Date(date) : date;
    }
    // 如果传入的是无效的字符串,那么就默认是当前日期
    if (!formatDate.getFullYear) {
      formatDate = new Date();
    }
    const year = formatDate.getFullYear();
    const firstDayOfYear = new Date(year, 0, 0);
    const timeGap = formatDate.getTime() - firstDayOfYear.getTime();
    return Math.floor(timeGap / 1000 / 60 / 60 / 24);
  };
  
/**
 * 判断身份证号是否合法
 * @param cardID 身份证号
 */
export function verifycardID(cardID: string) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cardID);
}

/**
 * 验证邮箱
 * @param email
 * @returns {boolean}
 */
export function verifyEmail(email: string) {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(
    email
  );
}

/**
 * 判断手机号是否合法
 * @param mobile 手机号
 */
export function verifyPhone(mobile: string) {
  return /^0?(13[0-9]|14[05679]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
    mobile
  );
}

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