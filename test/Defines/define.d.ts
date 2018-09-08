import { RAttribute, RProperty, ROperate } from './IDefine';
export interface RDefine<A extends RAttribute, P extends RProperty, O extends ROperate, F extends Function> {
    attr?: A;
    props?: P;
    opers?: O;
    onConstruction?: F;
}
