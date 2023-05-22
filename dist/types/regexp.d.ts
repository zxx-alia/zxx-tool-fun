/**
 * @description 获取名称通用正则表达式,仅支持汉字、数字、大小写字母、下划线
 * @date 2022-10-04
 * @param min:number  最小长度,默认为1
 * @param max:number  最大长度,默认为20
 * @returns RegExp  返回的正则表达式
 */
export declare const getNameRegexp: (min?: number, max?: number) => RegExp;
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
