import { rine, Rine, RineDefine, WithoutKey, RineType, RinePropertyContext } from '.'
console.log(rine)

const Defs = {
    props: {
        empty: {
            get(ctx: RinePropertyContext) {
                let self = ctx.self<typeof Some>()
                return () => 'asd'
            },
            call(ctx) {
                return () => 123
            }
        },
        self: {
            get(ctx){
                return null
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
}
export const Some = rine(Defs)

let o = new Some(1)
console.log(o instanceof Rine)

const e = o.empty
console.log(e)

const eo = e()
console.log(eo)
debugger
