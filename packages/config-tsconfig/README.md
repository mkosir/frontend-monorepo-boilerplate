# tsconfig

Shared `tsconfig.json` files from which all other `tsconfig.json` inherit from.

[`extends`](https://www.typescriptlang.org/tsconfig#extends):

- The configuration from the base file are loaded first, then overridden by those in the inheriting config file.
- All relative paths found in the configuration file will be resolved relative to the configuration file they originated in.
- `files`, `include` and `exclude` from the inheriting config file overwrite those from the base config file, and that circularity between configuration files is not allowed.
- Properties with relative paths found in the configuration file, which aren’t excluded from inheritance, will be resolved relative to the configuration file they originated in.
