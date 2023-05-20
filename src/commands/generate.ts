import {Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'
import {exec} from 'node:child_process'

export default class Generate extends Command {
  static description = 'Generates a Unity scaffold for an existing MUD game, using UniMUD'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'Name of the Unity package within your MUD project'}),
    path: Flags.string({char: 'p', description: 'Installation path. eg /user/john/workspace/emojimon/packages'}),
  }

  static args = {}

  public async run(): Promise<void> {
    const {flags} = await this.parse(Generate)

    const unimudRepo = 'https://github.com/emergenceland/UniMUD'
    const name = flags.name ?? 'unityclient'
    const path = flags.path ?? './packages'

    if (fs.existsSync(path)) {
      console.log(`Project path already exists ${path}`)
    } else {
      console.log(`Creating directory for project at ${path}`)
      fs.mkdirSync(path, {recursive: true})
    }

    exec(`git clone ${unimudRepo} ${path}/${name}`, (err, stdout, _) => {
      console.log('Cloned repo to ' + name)
      if (err) {
        console.error(err)
        return
      }

      console.log(stdout)
    })
  }
}
