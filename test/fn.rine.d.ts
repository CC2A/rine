import { RineConstructor } from './Rine';
import { RineDefine, RineProperty, RineOperate, RineAttribute } from './Defines';
import { Checker } from './TypeCheck';
/** Auto make chain obj, with type
 * @param defs definition of chain object
 */
export declare function rine<A extends RineAttribute, P extends RineProperty, O extends RineOperate, F extends Function>(defs: RineDefine<A, P, O, F>): RineConstructor<Checker<A, P, O, F>, F>;
