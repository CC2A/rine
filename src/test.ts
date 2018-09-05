import { rine, Rine, WithoutKey } from './rine'
import { Minus } from './Subtraction';
console.log(rine)

export const Some = rine({
    props: {
        empty: {
            get(ctx) {
                return () => 'asd'
            },
            call(ctx) {
                return () => 123
            }
        }
    },
    opers: {
        some: {
            call(ctx) {
                return () => false
            }
        }
    },
    onConstruction(a: 1) {

    },
})

let o = new Some(1)
console.log(o instanceof Rine)
debugger
