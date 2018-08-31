export * from './types';
import { IfExtract, KeyNotCrossEach3 } from './types';
export interface RineAttribute<S> {
    [key: string]: {
        call?(ctx: any): any;
    };
    [key: number]: {
        call?(ctx: any): any;
    };
}
export interface RineProperty<S> {
    [key: string]: {
        get?(ctx: any): any;
        call?(ctx: any): any;
    };
    [key: number]: {
        get?(ctx: any): any;
        call?(ctx: any): any;
    };
}
export interface RineOperate<S> {
    [key: string]: {
        call?(ctx: any): any;
    };
    [key: number]: {
        call?(ctx: any): any;
    };
}
export interface RineDefine<A extends RineAttribute<A>, P extends RineProperty<P>, O extends RineOperate<O>, R extends Rine, F> {
    attr?: A;
    props?: P;
    opers?: O;
    onConstruction?: F;
}
export interface Rine {
}
export interface RineConstructor<T extends Rine> {
    new (): T;
    (): T;
}
export declare function rine<A extends RineAttribute<A>, P extends RineProperty<P>, O extends RineOperate<O>, R extends Rine, F>(defs: RineDefine<A, P, O, R, F>): IfExtract<KeyNotCrossEach3<F, never, A, P, O>, never, RineConstructor<R>, F>;
