import { rine, Rine } from './rine'
console.log(rine)

interface Some<T> {
    new(a: 1): T
    (a: 1): T
}

const obj = rine({
    props: {
        empty: {
            get(ctx) {

            }
        }
    },
    onConstruction: (function (a: 1) {

    }) as Some<Rine>
})

new obj(1)