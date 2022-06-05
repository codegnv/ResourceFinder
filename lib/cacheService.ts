// Source: https://github.com/mkhmylife/airtable-proxy
const CACHE_TTL = 1000 * 60 * 10;    // 10 minutes

export default class CacheService {

    private memoryCache: string | undefined;
    private cacheExpiredAt: number = Date.now();

    public get(): any {
        if (!this.memoryCache) {
            throw new Error("Memory cache is empty");
        }
        return this.memoryCache;
    }

    public has(): boolean {
        const now = Date.now();
        return this.memoryCache !== undefined;    
    }

    public expired(): boolean {
        const now = Date.now();
        return now >= this.cacheExpiredAt;
    }

    public set(t: any) {
        this.memoryCache = t;
        const now = Date.now();
        this.cacheExpiredAt = now + CACHE_TTL;
    }
}
