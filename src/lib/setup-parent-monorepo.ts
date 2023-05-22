import * as fs from 'node:fs'

const updatePackageJson = (path: string) => {
  // customize package.json
  console.log('Updating mono repo package.json')
  const packagePath = `${path}/package.json`
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

  // add scripts
  packageJson.scripts.mudnode = 'mud devnode'

  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
}

export const setupParentMonoRepo = (rootPath: string,  skipPackageJson: boolean): void => {
  console.log('Setting up monorepo')

  if (!skipPackageJson) updatePackageJson(rootPath)
}
