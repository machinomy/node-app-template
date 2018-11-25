import * as yargs from 'yargs'
import { URL } from 'url'

interface Options {
  optionA: string
  optionB: number
  optionC: BigInt
}

// TODO Insert it into class
const parser = yargs
    .config()
    .alias('c', 'config')
    .demandOption('config')

namespace Options {
  async function parse (args: Array<string>): Promise<any> {
    const options = parser.parse(args)
    return options
  }

  export async function build (args: Array<string>): Promise<Options> {
    const options = await parse(args)
    return {
      optionA: options.optionA,
      optionB: options.optionB,
      optionC: options.optionC
    }
  }
}

export default Options
