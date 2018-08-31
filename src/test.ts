import { rine, Rine } from './rine'
console.log(rine)

interface Some<T> {
    new(a: 1): T
    (a: 1): T
}

const obj = rine().prop({
    some: {
        get(ctx) {
            return () => 'asd'
        },
        call(ctx) {
            return () => 123
        }
    },
    asd: {
        get(ctx) {
            return () => false
        }
    }
})
    .prop({
        
    })

    .val()

// const obj = rine({
//     props: {
//         empty: {
//             get() {
//                 return () => 1
//             }
//         }
//     },
//     onConstruction: function (a: 1) {

//     } as Some<Rine>
// })

// let o = new obj(1)
// console.log(o instanceof Rine)
// debugger