import { RineConstructor } from './Rine';
import { RProperty, ROperate, RAttribute } from './Defines';
import { RDefine } from './Defines/define';
import { RineCheck } from './TypeCheck';
/** Auto make chain obj, with type
 * @param defs definition of chain object
 */
export declare function rine<A extends RAttribute, P extends RProperty, O extends ROperate, F extends Function>(defs: RDefine<A, P, O, F>): RineConstructor<RineCheck<A, P, O>, F>;
