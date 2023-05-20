import {Command, Flags} from '@oclif/core'
import {setupContracts} from '../lib/setup-contracts'
import {setupUnityClient} from '../lib/setup-unityclient'
// import {exec} from 'node:child_process'

export default class Generate extends Command {
  static description = 'Generates a Unity scaffold for an existing MUD game, using UniMUD'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    path: Flags.string({char: 'p', description: 'Installation path. eg /user/john/workspace/emojimon'}),
  }

  static args = {}

  public async run(): Promise<void> {
    const {flags} = await this.parse(Generate)

    const path = flags.path ?? './'
    const name = 'unityclient'

    // if (fs.existsSync(path)) {
    //   console.log(`Project path already exists ${path}`)
    // } else {
    //   console.log(`Creating directory for project at ${path}`)
    //   fs.mkdirSync(path, {recursive: true})
    // }
    setupContracts(path, name)
    setupUnityClient(path, name)
  }
}
