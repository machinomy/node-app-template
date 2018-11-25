import Logger from '@machinomy/logger'
import { NewmanRunSummary } from 'newman'
import * as newman from 'newman'

const log = new Logger('newman')

newman.run({
  collection: require('./REST.postman_collection.json'),
  reporters: 'cli'
}, (err: Error | null, summary: NewmanRunSummary) => {
  if (err) { throw err }
  log.info('collection run complete!')
})
