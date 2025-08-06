import LocalStorageSingleton from "./LocalStorage.singleton";

export interface IStorage {
    getItem<T>(key: string): T;
    setItem<T extends string>(key: string, value: T): void;
    removeItem(key: string): void;
}

class Storage implements IStorage {
    private _Storage: IStorage;
    constructor(storage: IStorage) {
        this._Storage = storage;
    }
    getItem<T>(key: string): T {
        return this._Storage.getItem(key) as T;
    }
    removeItem(key: string): void {
        this._Storage.removeItem(key);
    }
    setItem<T extends string>(key: string, value: T): void {
        this._Storage.setItem(key, value);
    }

}

const LocalStorage = new LocalStorageSingleton();
const StorageSingleton = new Storage(LocalStorage);
export type TStorage = Storage;
export default StorageSingleton
