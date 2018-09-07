import { IRineConstructor, RineType } from '../Rine';
import { RineFn } from './RineFn';
export interface RinePropertyContext {
    self<T extends IRineConstructor<any>>(): RineType<T>;
}
export declare class PropertyContext implements RinePropertyContext {
    self(): any;
}
export declare class RineFnProperty extends RineFn {
    $get: () => any;
    $call: () => any;
    ctx: RinePropertyContext;
    ctx_proxy: object;
    setGet($get: any): void;
    setCall($call: any): void;
    constructor(get: (ctx: RinePropertyContext) => Function, call: (ctx: RinePropertyContext) => Function);
    exec(): any;
}
