import { TypeId } from '../utils'

export const RineSymbol = Symbol('Rine')

export interface Rine {
    [RineSymbol]: this
}

export class Rine {
    [RineSymbol]: this
    constructor() {
        Object.defineProperties(this, {
            [RineSymbol]: { value: this }
        })
    }
    static [TypeId]: typeof RineSymbol
}
Object.defineProperties(Rine, {
    [TypeId]: { value: RineSymbol }
})

export function RineMixin<B extends new (...args: any[]) => any>(Base: B) {
    type $Rine = Rine
    return class Rine extends Base implements $Rine {
        [RineSymbol]: this
        constructor(...args: any[]) {
            super(...args)
            Object.defineProperties(this, {
                [RineSymbol]: { value: this }
            })
        }
    }
}