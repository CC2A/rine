import { Rine, RineConstructor } from './Rine'
import { RProperty, ROperate, RAttribute, IDefine } from './Defines'
import { RDefine } from './Defines/define'
import { RineCheck } from './TypeCheck'
import { ConstructorFn } from './types'
import { keyCrossCheck } from './utils'
import { makeProxy } from './Contexts/makeProxy'

/** Auto make chain obj, with type
 * @param defs definition of chain object
 */
export function rine(defs: IDefine): any {
    const { attr, props, opers, onConstruction } = defs
    keyCrossCheck(attr, props, opers)

    return function constructor(...p) {
        if (!(this instanceof constructor))
            return new (constructor as any)()

        if (onConstruction != null) {
            (onConstruction as any).call(this, ...p)
        }

        const proxy = makeProxy(this, attr, props, opers)

        //set __proto__
        const proto = new Rine()
        this.__proto__ = new Proxy(proxy, {
            get(target, property, receiver) {
                if (property == '__proto__') return proto
                return target[property]
            },
            getPrototypeOf(target) {
                return proto
            }
        })
    } as any
}