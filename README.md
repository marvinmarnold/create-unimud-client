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
pnpm initialize

# Start app
pnpm run dev
```


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