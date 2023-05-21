import * as fs from 'node:fs'
import * as pathLib from 'node:path'

const updatePackageJson = (path: string, name: string) => {
  // customize package.json
  console.log('Updating package.json')
  const packagePath = `${path}/package.json`
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  // add scripts
  packageJson.scripts.csTables = `rimraf ../${name}/Assets/Scripts/codegen && tsx unity/csDataStore.ts ../${name}/Assets/Scripts/codegen`
  packageJson.scripts.csBindings = `ts-node unity/csBindings.ts ../${name}/Assets/Scripts`
  packageJson.scripts.csgen = 'pnpm run csBindings && pnpm run csTables'
  packageJson.scripts.initialize += ' && dotnet tool restore && pnpm run csgen'
  packageJson.scripts.resources = `ts-node unity/moveDeployToResources.ts ../${name}/Assets/Resources ./deploys/31337`
  packageJson.scripts.deploy += ' && pnpm run resources'

  // add dependencies
  packageJson.devDependencies['ts-node'] = '^10.9.1'
  packageJson.devDependencies['@types/ejs'] = '^3.1.2'
  packageJson.devDependencies.tsx = '^3.12.7'
  packageJson.devDependencies.ejs = '^3.1.9'
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
}

const copyDotNetNethereumConfigs = (path: string) => {
  console.log('Copying .NET and Nethereum configs')
  const root = pathLib.resolve(__dirname, '../..')
  fs.copyFileSync(`${root}/templates/dotnet-tools.json`, `${path}/dotnet-tools.json`)
  fs.copyFileSync(`${root}/templates/Nethereum.Generator.json`, `${path}/Nethereum.Generator.json`)
}

const copyDotNetNethereumCode = (path: string) => {
  console.log('Copying .NET and Nethereum code')
  const root = pathLib.resolve(__dirname, '../..')
  fs.cpSync(`${root}/templates/unity`, `${path}/unity`, {recursive: true})
}

export const setupContracts = (projPath: string, name: string): void => {
  console.log('Setting up contracts')
  const contractsPath = `${projPath}/packages/contracts`

  updatePackageJson(contractsPath, name)
  copyDotNetNethereumConfigs(contractsPath)
  copyDotNetNethereumCode(contractsPath)
}
