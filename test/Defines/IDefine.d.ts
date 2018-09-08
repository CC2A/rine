import { RinePropertyContext } from '../Contexts';
export interface RAttribute {
    [key: string]: {
        call(ctx: any): Function;
    };
    [key: number]: {
        call(ctx: any): Function;
    };
}
export interface RProperty {
    [key: string]: {
        get(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
        call?(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
    };
    [key: number]: {
        get(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
        call?(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
    };
}
export interface ROperate {
    [key: string]: {
        call(ctx: any): Function;
    };
    [key: number]: {
        call(ctx: any): Function;
    };
}
