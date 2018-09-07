import { RineAttribute, RineProperty, RineOperate } from '../Defines';
export declare function makeProxy<T extends object, A extends RineAttribute, P extends RineProperty, O extends RineOperate>(self: T, attr: A, props: P, opers: O): T;
