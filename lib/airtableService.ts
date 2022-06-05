// Source: https://github.com/mkhmylife/airtable-proxy
import airtable from 'airtable';
import Airtable from 'airtable';
import CacheService from './cacheService';
import dbConnect from './airtableConnect'

export default class AirtableService {
    private table: string
    private cache: CacheService

    constructor(table: string) {
        console.log("Making AirtableService")
        this.table = table;
        this.cache = new CacheService();
    }

    private async getTableContent() {
        var conn = await dbConnect()
        return await conn(this.table).select().all()
    }

    public async getCachedTableContent() {
        if (!this.cache.has()) {
            console.log(`[cache]: Cache is empty, fetching`, `${new Date()}`);
            const records = await this.getTableContent();
            this.cache.set(records);
            return records;
        }
        if (this.cache.expired()) {
            console.log(`[cache]: Cache is expired, refetching`, `${new Date()}`);
            this.getTableContent().then(records => {
                this.cache.set(records);
                console.log(`[cache]: Cache updated`, `${new Date()}`);
            });
        }
        console.log('using cache')
        return this.cache.get();
    }
}