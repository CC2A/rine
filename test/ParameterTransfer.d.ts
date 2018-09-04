export declare type ParameterTransfer<T extends Function> = T extends (...args: infer P) => any ? P : never;
