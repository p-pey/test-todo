import type { IStorage } from "./StorageSingleton.ts";


export default class LocalStorageSingleton implements IStorage {
       private _LocalStorage: typeof localStorage;
       constructor() {
              this._LocalStorage = localStorage;
       }
       getItem<T>(key: string): T {
              return this._LocalStorage.getItem(key) as T;
       }
       removeItem(key: string): void {
              this._LocalStorage.removeItem(key);
       }
       setItem<T extends string>(key: string, value: T): void {
              this._LocalStorage.setItem(key, value);
       }
}