create-unimud-client
====================

## Quickstart

```
git clone https://github.com/marvinmarnold/create-unimud-client
cd create-unimud-client
./bin/dev generate --path /ABSOLUTE/PATH/TO/emojimon/packages

// example on macos: ./bin/dev generate --path /Users/user/workspace/emojimon/packages
```

Emojimon will now have UniMUD cloned in, as one of the packages.

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-unimud-client
$ create-unimud-client COMMAND
running command...
$ create-unimud-client (--version)
create-unimud-client/0.0.0 darwin-x64 node-v18.14.2
$ create-unimud-client --help [COMMAND]
USAGE
  $ create-unimud-client COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-unimud-client generate`](#create-unimud-client-generate)
* [`create-unimud-client help [COMMANDS]`](#create-unimud-client-help-commands)
* [`create-unimud-client plugins`](#create-unimud-client-plugins)
* [`create-unimud-client plugins:install PLUGIN...`](#create-unimud-client-pluginsinstall-plugin)
* [`create-unimud-client plugins:inspect PLUGIN...`](#create-unimud-client-pluginsinspect-plugin)
* [`create-unimud-client plugins:install PLUGIN...`](#create-unimud-client-pluginsinstall-plugin-1)
* [`create-unimud-client plugins:link PLUGIN`](#create-unimud-client-pluginslink-plugin)
* [`create-unimud-client plugins:uninstall PLUGIN...`](#create-unimud-client-pluginsuninstall-plugin)
* [`create-unimud-client plugins:uninstall PLUGIN...`](#create-unimud-client-pluginsuninstall-plugin-1)
* [`create-unimud-client plugins:uninstall PLUGIN...`](#create-unimud-client-pluginsuninstall-plugin-2)
* [`create-unimud-client plugins update`](#create-unimud-client-plugins-update)

## `create-unimud-client generate`

Generates a Unity scaffold for an existing MUD game, using UniMUD

```
USAGE
  $ create-unimud-client generate [-p <value>]

FLAGS
  -p, --path=<value>  Installation path. eg /user/john/workspace/emojimon

DESCRIPTION
  Generates a Unity scaffold for an existing MUD game, using UniMUD

EXAMPLES
  $ create-unimud-client generate
```

_See code: [dist/commands/generate.ts](https://github.com/marvinmarnold/create-unimud-client/blob/v0.0.0/dist/commands/generate.ts)_

## `create-unimud-client help [COMMANDS]`

Display help for create-unimud-client.

```
USAGE
  $ create-unimud-client help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for create-unimud-client.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `create-unimud-client plugins`

List installed plugins.

```
USAGE
  $ create-unimud-client plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ create-unimud-client plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `create-unimud-client plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-unimud-client plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ create-unimud-client plugins add

EXAMPLES
  $ create-unimud-client plugins:install myplugin 

  $ create-unimud-client plugins:install https://github.com/someuser/someplugin

  $ create-unimud-client plugins:install someuser/someplugin
```

## `create-unimud-client plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ create-unimud-client plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ create-unimud-client plugins:inspect myplugin
```

## `create-unimud-client plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-unimud-client plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ create-unimud-client plugins add

EXAMPLES
  $ create-unimud-client plugins:install myplugin 

  $ create-unimud-client plugins:install https://github.com/someuser/someplugin

  $ create-unimud-client plugins:install someuser/someplugin
```

## `create-unimud-client plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ create-unimud-client plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ create-unimud-client plugins:link myplugin
```

## `create-unimud-client plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-unimud-client plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-unimud-client plugins unlink
  $ create-unimud-client plugins remove
```

## `create-unimud-client plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-unimud-client plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-unimud-client plugins unlink
  $ create-unimud-client plugins remove
```

## `create-unimud-client plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-unimud-client plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-unimud-client plugins unlink
  $ create-unimud-client plugins remove
```

## `create-unimud-client plugins update`

Update installed plugins.

```
USAGE
  $ create-unimud-client plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
