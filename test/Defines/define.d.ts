import { RinePropertyContext } from '../Contexts';
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
