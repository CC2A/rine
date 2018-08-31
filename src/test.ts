import { rine, Rine, RineType } from './rine'
console.log(rine)

interface Some<T> {
    new(a: 1): T
    (a: 1): T
}

export const obj = (() => {
    const obj = rine({
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
    return obj as Some<RineType<typeof obj>>
})()

let o = new obj(1)
console.log(o instanceof Rine)
debugger