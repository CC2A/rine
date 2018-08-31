export * from './types';
export interface RineAttribute<R> {
    call?(): any;
}
export interface RineProperty<R> {
    [key: string]: {
        get?(ctx: any): () => R;
        call?(): any;
    };
}
export interface RineOperate<R> {
    call?(): any;
}
export interface Rine {
}
export declare class Rine {
}
export interface RineConstructor<T extends Rine> {
    new (): T;
    (): T;
}
export declare function rine(): RineDefiner<Rine>;
declare class RineDefiner<OUT extends Rine> {
    prop<R, D extends RineProperty<R>, O extends {
        [K in keyof D]: D[K]['get'];
    }>(def: D): RineDefiner<O>;
    val(): OUT;
}
