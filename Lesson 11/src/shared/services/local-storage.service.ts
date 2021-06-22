export class LocalStorageService {
    get(key: string): string {
        return localStorage.getItem(key);
    }
    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
    remove(key: string) {
        localStorage.removeItem(key);
    }
}