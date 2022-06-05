import { Connection } from 'mongoose'
import AirtableService from './airtableService'

declare global {
  var mongoose: any
  var base: any
  var cache: any;
  //var cache: { [table: string]: AirtableService; } = {};
}


//export const mongoose = global.mongoose || new Connection()
//export const base = global.base || null

//if (process.env.NODE_ENV !== 'production') global.mongoose = mongoose
//if (process.env.NODE_ENV !== 'production') global.base = base
