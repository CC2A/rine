import { ParameterTransfer, ConstructorFn } from '../types'
import { Rine } from './RineClass'

export type IRineConstructor<R extends Rine> = ConstructorFn<R>

export type RineConstructor<T extends Rine, F extends Function> = T extends Rine ?
    (new (...args: ParameterTransfer<F>) => T) & ((...args: ParameterTransfer<F>) => T) : never


/** Obtain the `Rine` type of `IRineConstructor<Rine>`  */
export type RineType<C extends IRineConstructor<any>> =
    C extends (...args: any[]) => infer R ? R :
    C extends new (...args: any[]) => infer R ? R :
    C extends IRineConstructor<infer R> ? R : any