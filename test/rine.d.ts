export * from './types';
import { ParameterTransfer, IntersectionUniqueKey } from './types';
export declare const TypeId: unique symbol;
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
export declare type RineConstructor<T extends Rine, F extends Function> = T extends Rine ? (new (...args: ParameterTransfer<F>) => T) & ((...args: ParameterTransfer<F>) => T) : never;
/** Obtain the `Rine` type of `RineConstructor<Rine, any>`  */
export declare type RineType<C extends RineConstructor<any, any>> = C extends RineConstructor<infer R, any> ? R : any;
export interface RineAttribute {
    [key: string]: {
        call(ctx: any): Function;
    };
    [key: number]: {
        call(ctx: any): Function;
    };
}
export interface RineProperty {
    [key: string]: {
        get(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
        call?(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
    };
    [key: number]: {
        get(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
        call?(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
    };
}
export interface RineOperate {
    [key: string]: {
        call(ctx: any): Function;
    };
    [key: number]: {
        call(ctx: any): Function;
    };
}
export interface RineDefine<A extends RineAttribute, P extends RineProperty, O extends RineOperate, F extends Function> {
    attr?: A;
    props?: P;
    opers?: O;
    onConstruction?: F;
}
export interface RinePropertyContext {
}
interface RineFn {
}
declare abstract class RineFn {
    exec(valfn: Function): any;
}
declare class RineFnProperty extends RineFn {
    $get: () => any;
    $call: () => any;
    ctx: RinePropertyContext;
    ctx_proxy: object;
    setGet($get: any): void;
    setCall($call: any): void;
    constructor(get: (ctx: RinePropertyContext) => Function, call: (ctx: RinePropertyContext) => Function);
    exec(): any;
}
declare type CheckRineProperty<P extends RineProperty, R> = {} extends P ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof P]: P[K]['call'] extends (ctx: RineFnProperty) => infer R ? {} extends R ? ReturnType<ReturnType<P[K]['get']>> : ReturnType<ReturnType<P[K]['get']>> & ReturnType<P[K]['call']> : ReturnType<ReturnType<P[K]['get']>>;
}>;
declare type CheckRineOperate<O extends RineOperate, R> = {} extends O ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof O]: ReturnType<O[K]['call']>;
}>;
declare type CheckRineAttribute<A extends RineAttribute, R> = {} extends A ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof A]: ReturnType<A[K]['call']>;
}>;
/** Auto make chain obj, with type
 * @param defs definition of chain object
 */
export declare function rine<A extends RineAttribute, P extends RineProperty, O extends RineOperate, F extends Function>(defs: RineDefine<A, P, O, F>): RineConstructor<CheckRineProperty<P, CheckRineOperate<O, CheckRineAttribute<A, {}>>> & Rine, F>;
