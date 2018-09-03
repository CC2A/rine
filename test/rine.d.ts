export * from './types';
import { KeyNotCrossEach3 } from './types';
export interface Rine {
}
export declare class Rine {
}
export interface RineConstructor<T extends Rine> {
    new (): T;
    (): T;
}
/** Obtain the `Rine` type of `RineConstructor<Rine>`
 *
 * *The only reason this type exists is that typescript cannot transfer function arguments*
*/
export declare type RineType<C extends RineConstructor<any>> = C extends RineConstructor<infer R> ? R : any;
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
    abstract $exec(): any;
}
declare class RineFnProperty extends RineFn {
    $get: () => any;
    $call: () => any;
    ctx: RinePropertyContext;
    ctx_proxy: object;
    setGet($get: any): void;
    setCall($call: any): void;
    constructor(get: (ctx: RinePropertyContext) => Function, call: (ctx: RinePropertyContext) => Function);
    $exec(): void;
}
declare type CheckRineProperty<P extends RineProperty, R> = {} extends P ? R : R & {
    readonly [K in keyof P]: P[K]['call'] extends (ctx: RineFnProperty) => infer R ? {} extends R ? ReturnType<ReturnType<P[K]['get']>> : ReturnType<ReturnType<P[K]['get']>> & ReturnType<P[K]['call']> : ReturnType<ReturnType<P[K]['get']>>;
};
declare type CheckRineOperate<O extends RineOperate, R> = {} extends O ? R : R & {
    readonly [K in keyof O]: ReturnType<O[K]['call']>;
};
declare type CheckRineAttribute<A extends RineAttribute, R> = {} extends A ? R : R & {
    readonly [K in keyof A]: ReturnType<A[K]['call']>;
};
declare type Check_rine<A extends RineAttribute, P extends RineProperty, O extends RineOperate> = RineConstructor<CheckRineProperty<P, CheckRineOperate<O, CheckRineAttribute<A, {}>>> & Rine>;
/** Auto make chain obj, with type
 * @param defs definition of chain object
 */
export declare function rine<A extends RineAttribute, P extends RineProperty, O extends RineOperate, F extends Function>(defs: RineDefine<A, P, O, F>): KeyNotCrossEach3<Check_rine<A, P, O>, never, A, P, O>;
