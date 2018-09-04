type TheArrKeys<T extends PropertyKey[]> = { [K in (keyof T) extends void ? any : any]: T[K] }
type GetStrKey<T extends any> = T[string]
export type Keys<T extends PropertyKey[] | {}> = T extends Array<any> ? GetStrKey<TheArrKeys<T>> : keyof T
type TheWithOutKey<A, T extends any> = A extends never ? never : { [K in T extends PropertyKey ? T : T]: A[K] }
export type WithOutKey<A, B extends PropertyKey[]> = TheWithOutKey<A, Exclude<Keys<A>, Keys<B>>>