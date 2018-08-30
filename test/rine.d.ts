export { KeyNotCrossEachOther, KeyNotCrossEach3, KeyCrossedError } from './KeyNotCrossEachOther';
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
export interface RineDefine<A extends RineAttribute<A>, P extends RineProperty<P>, O extends RineOperate<O>> {
    attr?: A;
    props?: P;
    opers?: O;
}
export declare function rine<A extends RineAttribute<A>, P extends RineProperty<P>, O extends RineOperate<O>>(defs: RineDefine<A, P, O>): null;
