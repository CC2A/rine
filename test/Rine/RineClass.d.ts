import { TypeId } from '../utils';
export declare const RineSymbol: unique symbol;
export interface Rine {
    [RineSymbol]: this;
}
export declare class Rine {
    [RineSymbol]: this;
    constructor();
    static [TypeId]: typeof RineSymbol;
}
export declare function RineMixin<B extends new (...args: any[]) => any>(Base: B): {
    new (...args: any[]): {
        [x: string]: any;
        [RineSymbol]: any;
    };
} & B;
