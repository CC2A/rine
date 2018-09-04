import { rine, Rine } from './rine'
console.log(rine)

export const obj = rine({
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

let o = new obj(1)
console.log(o instanceof Rine)
debugger
