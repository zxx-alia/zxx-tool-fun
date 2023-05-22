/**
 * 返回传入的日期是今年的第几天,如果不传参数则默认是当前日期
 * @param date (Data | string)传入日期
 * @returns (number)
 */
export declare const dayOfYear: (date?: Date | string) => number;
/**
 * 判断身份证号是否合法
 * @param cardID 身份证号
 */
export declare function verifycardID(cardID: string): boolean;
/**
 * 验证邮箱
 * @param email
 * @returns {boolean}
 */
export declare function verifyEmail(email: string): boolean;
/**
 * 判断手机号是否合法
 * @param mobile 手机号
 */
export declare function verifyPhone(mobile: string): boolean;
export declare function getFileSuffix(name: string): string;
/**
 * 格式化行政区
 */
export declare function formatArea(args: any): string;
/**
 * 验证数据是否是json数据
 * @param str 验证数据
 * @returns (boolean) 验证结果
 */
export declare function isJSON(str: any): boolean | undefined;
/**
 * 格式化地址数据
 * @param args 地址原始数据
 * @returns (string) 字符串形式的地址
 */
export declare function getAddress(args: any): string;
