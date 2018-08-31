export * from './types';
import { KeyNotCrossEach3 } from './types';
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
        get(ctx: any): Function;
        call?(ctx: any): Function;
    };
    [key: number]: {
        get(ctx: any): Function;
        call?(ctx: any): Function;
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
export interface Rine {
}
export declare class Rine {
}
export interface RineConstructor<T extends Rine> {
    new (): T;
    (): T;
}
export declare type RineType<C extends RineConstructor<any>> = C extends RineConstructor<infer R> ? R : any;
declare type CheckRineProperty<P extends RineProperty, R> = {} extends P ? R : R & {
    readonly [K in keyof P]: P[K]['call'] extends (ctx: any) => infer R ? {} extends R ? ReturnType<ReturnType<P[K]['get']>> : ReturnType<ReturnType<P[K]['get']>> & ReturnType<P[K]['call']> : ReturnType<ReturnType<P[K]['get']>>;
};
declare type CheckRineOperate<O extends RineOperate, R> = {} extends O ? R : R & {
    readonly [K in keyof O]: ReturnType<O[K]['call']>;
};
declare type CheckRineAttribute<A extends RineAttribute, R> = {} extends A ? R : R & {
    readonly [K in keyof A]: ReturnType<A[K]['call']>;
};
declare type Check_rine<A extends RineAttribute, P extends RineProperty, O extends RineOperate> = RineConstructor<CheckRineProperty<P, CheckRineOperate<O, CheckRineAttribute<A, {}>>> & Rine>;
export declare function rine<A extends RineAttribute, P extends RineProperty, O extends RineOperate, F extends Function>(defs: RineDefine<A, P, O, F>): KeyNotCrossEach3<Check_rine<A, P, O>, never, A, P, O>;
