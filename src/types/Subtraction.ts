export type WithoutKey<A, B extends PropertyKey[]> = Pick<A, Exclude<keyof A, B[any]>>
export type MinusKey<A, B> = Pick<A, Exclude<keyof A, keyof B>>
export type KeyExpand<A> = { [P in keyof A]: { [K in P]: A[P] } }
export type Expand<A> = KeyExpand<A>[keyof KeyExpand<A>]
export type KeyPack<E> = E extends infer O ? keyof O : any
export type Minus<A, B> = Pick<A, KeyPack<Exclude<Expand<A>, Expand<B>>>>