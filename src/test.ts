import { rine, Rine, getType, WithoutKey, RineType, RinePropertyContext } from '.'
import { RineCheck, TRine } from './TypeCheck';
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
        },
        self: {
            get(ctx) {
                return ctx.self()
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
// console.log(o instanceof Rine)

// const e = o.empty
// console.log(e)

// const eo = e()
// console.log(eo)
// debugger
