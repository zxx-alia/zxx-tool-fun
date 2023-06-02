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
/**
 * 防抖函数
 * @param func （Function）函数体
 * @param delay （number）延迟时间
 */
export declare function debounce(func: Function, delay?: number): (this: unknown, ...args: any) => void;
/**
 * 节流函数
 * @param func （Function）函数体
 * @param delay （number）延迟时间
 * @returns
 */
export declare function throttle(func: Function, delay?: number): (this: unknown, ...args: any) => void;
