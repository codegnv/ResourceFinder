import AirtableService from './airtableService'
import programTable from '../models/tables'

async function cacheInit() {
    //let cache: object = global.cache
    
    if (!global.cache) {
        console.log("initing cache")
        global.cache = {}
        global.cache[programTable] = new AirtableService(programTable)

        console.log("Cache" + global.cache)
    }
}
export default cacheInit
