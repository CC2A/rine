import { Rine } from './Rine';
import { RProperty, ROperate, RAttribute } from './Defines';
import { IntersectionUniqueKey } from './types';
import { RDefine } from './Defines/define';
declare type CheckRineProperty<P extends RProperty, R> = {} extends P ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof P]: {} extends P[K]['call'] ? ReturnType<ReturnType<P[K]['get']>> : ReturnType<ReturnType<P[K]['get']>> & ReturnType<P[K]['call']>;
}>;
declare type CheckRineOperate<O extends ROperate, R> = {} extends O ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof O]: ReturnType<O[K]['call']>;
}>;
declare type CheckRineAttribute<A extends RAttribute, R> = {} extends A ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof A]: ReturnType<A[K]['call']>;
}>;
export declare type RineCheck<A extends RAttribute, P extends RProperty, O extends ROperate> = never extends never ? CheckRineProperty<P, CheckRineOperate<O, CheckRineAttribute<A, {}>>> & Rine : never;
export declare type TRine<D extends RDefine<any, any, any, any>> = RineCheck<D['attr'], D['props'], D['opers']>;
export declare function getType<A extends RAttribute, P extends RProperty, O extends ROperate, F extends Function>(defs: RDefine<A, P, O, F>): RineCheck<A, P, O>;
export {};
