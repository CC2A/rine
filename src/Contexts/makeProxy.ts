import { RAttribute, RProperty, ROperate } from '../Defines'
import { RineFn } from './RineFn'
import { RineFnProperty } from './property'

export function makeProxy(self: object, attr: RAttribute, props: RProperty, opers: ROperate): object {
    const fns = new Map<any, RineFn>()
    if (props != null) {
        for (const k in props) {
            const v = props[k]
            if (typeof v == null) continue
            const { get, call } = v
            if (typeof get != 'function' && typeof call != 'function') continue
            fns.set(k, new RineFnProperty(get, call))
        }
    }
    return new Proxy(self, {
        apply(target, thisArg, argumentsList) {
        },
        construct(target, thisArg, argumentsList) {
            return null//todo
        },
        get(target, property, receiver) {
            if (fns.has(property)) {
                const fn = fns.get(property)
                if (fn instanceof RineFnProperty) {
                    return fn.exec()
                }
            }
        },

    })
}