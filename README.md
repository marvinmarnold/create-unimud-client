create-unimud-client
====================
create-unimud-client is an opinionated Unity project generator for MUD v2 projects that wraps UniMUD.
You can use it to add Unity support for existing MUD projects, or create
the scaffold for a new MUD project and Unity frontend.

Generated Unity projects provide:
- Player spawning
- Player movements using arrows
- Optional VR reality support for Meta Quest 2

## Quickstart

```
# Go to the root of your MUD project
cd /PATH/TO/MUD/PROJECT/ROOT

# Install create-unimud-client
npm install -g create-unimud-client

# Generate Unity scaffold
npx create-unimud-client generate

# Alternatively, run from anywhere
npx create-unimud-client generate --path /PATH/TO/MUD/PROJECT/ROOT

# Install new dependencies
pnpm i

# Code generation
pnpm run initialize
```

Starting the app will depend on the project specifics. A typical flow may be:
- Start the blockchain locally: `dev mud:node`
- Deploy: `cd packages/contracts && pnpm run dev:local`
- Optionally start frontend: `pnpm run dev:client`

## Prerequisites

create-unimud-client supports the following MUD tables. Each section corresponds to an entry in `mud.config.ts`
- Spawnable players
```
Player: "bool"
```
- Player position
```
Position: {
    schema: {
        x: "int32",
        y: "int32",
    }
}
```

## Options
#### Enable VR

```
npx create-unimud-client generate --vr
```

### Do not modify package.json
Use this option with tankmud

```
npx create-unimud-client generate --skipPackageJson
```

## Setting up VR / Meta Quest 2

Follow the [official](https://developer.oculus.com/documentation/unity/unity-env-device-setup/) instructions to setup a headset.

When Unity is openend for the first time, you may notice errors: `UnityException: creating Asset path at`. Ignore those and switch the build target to Android. You can now run in Unity Editor.


## Contributing
### Releasing

```
npm version 0.0.0
npm publish
```
