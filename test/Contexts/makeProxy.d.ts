import { RAttribute, RProperty, ROperate } from '../Defines';
export declare function makeProxy<T extends object, A extends RAttribute, P extends RProperty, O extends ROperate>(self: T, attr: A, props: P, opers: O): T;
