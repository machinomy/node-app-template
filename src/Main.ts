import Logger from '@machinomy/logger'
import Options from './config/Options'
import { Registry } from './Registry'

export class Main {
  registry: Registry
  log: Logger

  constructor (options: Options) {
    this.registry = new Registry(options)
    this.log = new Logger('main')
  }

  async run (): Promise<void> {
    const websocketJSONRPCEndpoint = await this.registry.websocketJSONRPCEndpoint()
    await websocketJSONRPCEndpoint.listen()
    const httpEndpoint = await this.registry.httpEndpoint()
    await httpEndpoint.listen()
  }
}
