import { IRineConstructor, RineType, Rine } from '../Rine'

//#region public
export interface RineContext {
    self<T extends IRineConstructor<any>>(): RineType<T>;
    self<T extends Rine>(): T;
}
//#endregion