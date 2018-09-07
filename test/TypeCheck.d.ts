import { Rine } from './Rine';
import { RineProperty, RineOperate, RineAttribute } from './Defines';
import { IntersectionUniqueKey } from './types';
declare type CheckRineProperty<P extends RineProperty, R> = {} extends P ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof P]: {} extends P[K]['call'] ? ReturnType<ReturnType<P[K]['get']>> : ReturnType<ReturnType<P[K]['get']>> & ReturnType<P[K]['call']>;
}>;
declare type CheckRineOperate<O extends RineOperate, R> = {} extends O ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof O]: ReturnType<O[K]['call']>;
}>;
declare type CheckRineAttribute<A extends RineAttribute, R> = {} extends A ? R : IntersectionUniqueKey<never, R, {
    readonly [K in keyof A]: ReturnType<A[K]['call']>;
}>;
export declare type Checker<A extends RineAttribute, P extends RineProperty, O extends RineOperate, F extends Function> = CheckRineProperty<P, CheckRineOperate<O, CheckRineAttribute<A, {}>>> & Rine;
export {};
