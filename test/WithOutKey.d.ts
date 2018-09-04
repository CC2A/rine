declare type TheArrKeys<T extends PropertyKey[]> = {
    [K in (keyof T) extends void ? K : any]: T[K];
};
declare type GetStrKey<T extends any> = T[string];
export declare type Keys<T extends PropertyKey[]> = GetStrKey<TheArrKeys<T>>;
export {};
