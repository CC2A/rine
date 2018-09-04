type WithOutKey<A, B extends PropertyKey[]> = { [K in keyof A]: A[K] }

let x: WithOutKey<{ a: 1, b: 2 }, ['b']>

type a = typeof x

type TheArrKeys<T extends PropertyKey[]> = { [K in (keyof T) extends number ? K : any]: T[K] }
type GetStrKey<T extends any> = T[string]
export type Keys<T extends PropertyKey[]> = GetStrKey<TheArrKeys<T>>

declare let xasd: Keys<['a', 'b']>

type k = typeof xasd