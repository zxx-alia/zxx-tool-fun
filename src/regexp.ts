// 正则表达式相关 

/**
 * @description 获取名称通用正则表达式,仅支持汉字、数字、大小写字母、下划线
 * @date 2022-10-04
 * @param min:number  最小长度,默认为1
 * @param max:number  最大长度,默认为20
 * @returns RegExp  返回的正则表达式
 */
export const getNameRegexp = (min = 1, max = 20) => {
    return new RegExp(`^[\u4e00-\u9fa5_a-zA-Z0-9]{${min},${max}}$`);
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