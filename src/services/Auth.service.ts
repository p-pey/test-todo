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
    login(data: { username: string | undefined, password: string | undefined }): boolean {
        if (data.username !== this._USER.username || data.password !== this._USER.password) return false;
        this._storage.setItem(StorageKeys['AUTH:USER'], JSON.stringify(this._USER));
        return true
    }
    logout() {
        this._storage.removeItem(StorageKeys['AUTH:USER'])
    }
}