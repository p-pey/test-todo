import Storage, { type TStorage } from '../singleton/storage/StorageSingleton';


const StorageKeys = {
    "AUTH:USER": "AUTH:USER"
} as const;


export default class AuthService {
    private _storage: TStorage = Storage;
    private _USER = {
        username: "user",
        password: "12345678"
    }

    isAuthenticated() {
        return !!this._storage.getItem(StorageKeys['AUTH:USER']);
    }
    login() {
        this._storage.setItem(StorageKeys['AUTH:USER'], JSON.stringify(this._USER));
    }
    logout() {
        this._storage.removeItem(StorageKeys['AUTH:USER'])
    }
}