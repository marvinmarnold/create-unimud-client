import * as fs from 'node:fs'
import * as pathLib from 'path';

/*
Existing MUD code/template, including
Unity subfolder https://github.com/emergenceland/tankmud-tutorial/tree/final/packages/contracts/unity
Install other Nethereum configs
https://github.com/emergenceland/tankmud-tutorial/blob/lermchair/final-2/packages/contracts/Nethereum.Generator.json
https://github.com/emergenceland/tankmud-tutorial/blob/lermchair/final-2/packages/contracts/dotnet-tools.json
Update build process to include nethereum/unimud generation
https://github.com/emergenceland/tankmud-tutorial/blob/lermchair/final-2/packages/contracts/package.json#L8
*/

/**
 * Add cs codegen scripts to package.json
 * @param path
 * @param name
 */
export const updatePackageJson = (path: string, name: string) => {
  // customize package.json
  console.log('Updating package.json')
  const packagePath = `${path}/package.json`
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  packageJson.scripts.csTables = `rimraf ../${name}/Assets/Scripts/codegen && tsx unity/csDataStore.ts ../${name}/Assets/Scripts/codegen`
  packageJson.scripts.csBindings = `ts-node unity/csBindings.ts ../${name}/Assets/Scripts`
  packageJson.scripts.csgen = 'pnpm run csBindings && pnpm run csTables'
  packageJson.scripts.initialize += ' && dotnet tool restore && pnpm run csgen'
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
}

export const copyDotNetNethereumConfigs = (path: string) => {
    const root = pathLib.resolve(__dirname, '../..');
    console.log("Copying .NET and Nethereum configs")
    console.log(root)
  fs.copyFileSync(`${root}/templates/dotnet-tools.json`, `${path}/dotnet-tools.json`)
  fs.copyFileSync(`${root}/templates/Nethereum.Generator.json`, `${path}/Nethereum.Generator.json`)
}

export const setupContracts = (projPath: string, name: string) => {
  console.log('Setting up contracts')
  const contractsPath = `${projPath}/packages/contracts`

  updatePackageJson(contractsPath, name)
  copyDotNetNethereumConfigs(contractsPath)
}
