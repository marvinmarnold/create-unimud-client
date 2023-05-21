import * as fs from 'node:fs'
import * as pathLib from 'node:path'

const copyUnityClient = (path: string) => {
  console.log('Copying Unity client')
  const root = pathLib.resolve(__dirname, '../..')
  fs.cpSync(`${root}/templates/unityclient`, `${path}`, {recursive: true})
}

export const setupUnityClient = (projPath: string, name: string) => {
  console.log(`Setting up client ${name}`)
  const unityClientPath = `${projPath}/packages/${name}`

  copyUnityClient(unityClientPath)
}
