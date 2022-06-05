import Airtable from 'airtable'

// TODO this isn't working for some reason -- don't commit this version with secrets
//const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || ''
//const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || ''

const AIRTABLE_API_KEY = 'keyKP3hlDhh1Juulc'
const AIRTABLE_BASE_ID = 'appXpXbbS6RrjzKaX'

console.log("API KEY: " + AIRTABLE_API_KEY)
console.log("BASE ID: " + AIRTABLE_BASE_ID)

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    throw new Error('Please define the AIRTABLE_API_KEY and AIRTABLE_BASE_ID environment variables inside .env.local')
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

async function dbConnect() {
  /*if (global.cache) {
      console.log("returning cache")
      return global.cache
  }*/
  if (global.base) {
      console.log("returning base")
    return global.base
  }

  console.log("returning new instance")
  global.base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)
  return global.base
}

export default dbConnect
