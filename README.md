# Turborepo / Next.js / TypeScript / Tailwind / Material UI boilerplate

[![TypeScript][typescript-badge]][typescript-url]
[![semantic-release][semantic-badge]][semantic-url]

[![CI][build-badge]][build-url]
[![CI][lint-badge]][lint-url]
[![CI][tsc-badge]][tsc-url]
[![CI][test-badge]][test-url]

Deployments - prod/stage/storybook

[![CI][deploy-app-prod-badge]][deploy-app-prod-url]
[![CI][deploy-app-stage-badge]][deploy-app-stage-url]
[![CI][deploy-app-storybook-badge]][deploy-app-storybook-url]

[![CI][deploy-website-prod-badge]][deploy-website-prod-url]
[![CI][deploy-website-stage-badge]][deploy-website-stage-url]
[![CI][deploy-website-storybook-badge]][deploy-website-storybook-url]

[![CI][deploy-ui-prod-badge]][deploy-ui-prod-url]
[![CI][deploy-ui-stage-badge]][deploy-ui-stage-url]

Opinionated frontend monorepo with focus on best practices and painless developer experience:

- Monorepo setup that can be easily extended 🔧
- Spin it up with single command 🌀
- Blazing fast builds, lints, tests with Turborepo [remote caching](https://turborepo.org/docs/core-concepts/remote-caching) ⚡
- TypeScript 100% codebase

## Requirements

- [Node v18+](https://nodejs.org/)

## Running

_Easily set up a local development environment_

- `npm install`
- `npm run build`
- `npm run dev` - Start all apps 🚀

Visit one of the monorepo apps [localhost:3100](http://localhost:3100/)

## Features:

- [Turborepo v1](https://turborepo.org/) remote cache build system, with blazingly fast execution of commands (build, lint, test etc.) on your local machine and CI
- [TypeScript v5](https://github.com/microsoft/TypeScript) codebase with [Strict Configuration](https://typescript-eslint.io/docs/linting/configs#strict)
- [NextJs v13](https://github.com/vercel/next.js) apps
- Monorepo implements 3 styling solutions to build custom UI components, with shared theme across all apps.  
  Easily import UI components package into app:
  - [Vanilla CSS package](https://github.com/mkosir/turborepo-boilerplate/tree/main/packages/ui)
  - [Tailwind](https://github.com/mkosir/turborepo-boilerplate/tree/main/packages/ui-tailwind) library built with [Tailwind v3](https://tailwindcss.com/)
  - [Material UI](https://github.com/mkosir/turborepo-boilerplate/tree/main/packages/ui) library built with [MUI v5](https://mui.com/) and shared theme across all apps and packages
- Unit and integration tests with [Jest](https://github.com/facebook/jest) and [React Testing Library](https://github.com/testing-library/react-testing-library). Run a single test in any monorepo app/package [instantly](https://github.com/mkosir/turborepo-boilerplate-multiple-ui/raw/main/misc/vscode-jest-runner.gif).
- Linting with [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/) code formatter
- Git hooks with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- Commit messages must meet [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format.  
  After staging changes just run `npm run commit` and get instant feedback on your commit message formatting and be prompted for required fields by [Commitizen](https://github.com/commitizen/cz-cli)

## Commands

Bellow commands will be executed on monorepo level - on all apps and packages where npm script exists.

| Command             | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| prepare             | Setup git hooks with Husky (executes on npm install)                                |
| build               | Build all apps and packages (`build-next-static`, `dist`)                           |
| dev                 | Start all apps                                                                      |
| lint                | Lint all apps and packages                                                          |
| lint-staged-husky   | Run prettier and lint on staged files                                               |
| tsc                 | Run TypeScript compiler                                                             |
| test                | Run tests on all apps and packages                                                  |
| storybook           | Start storybooks on all apps and packages                                           |
| storybook-build     | Build all storybooks (`build-storybook-static`)                                     |
| format-lint         | Lint formatting with Prettier                                                       |
| format-fix          | Fix formatting with Prettier                                                        |
| commit              | Run Commitizen on staged file                                                       |
| clean               | Remove installed, generated and cached folders (node_modules, coverage, .next etc.) |
| remove-turbo-cache  | Removes Turborepo local cache                                                       |
| update-dependencies | Update dependencies to their latest versions                                        |

## Conventions

Convention over configuration should be followed as much as possible as described in [Conventions.md](https://github.com/mkosir/turborepo-boilerplate/blob/main/README_CONVENTIONS.md)

TLDR:

- **Code is organized and grouped by feature.** Place code as close to where it's relevant as possible.
- Strive for data immutability.
- Client global state is discouraged. If truly needed use Zustand (no Redux).
- Use named exports. In case of exceptions [eslint rule](https://github.com/mkosir/turborepo-boilerplate/blob/main/packages/config-eslint/index.js#L78) is disabled (e.g. Next.js pages)

## Monorepo

Monorepo features and conventions:

- Monorepo is being quite highly opinionated in order to achieve best developer experience. It's meant to be used as frontend only monorepo, 100% TypeScript, consistent codebase across whole monorepo with automated tooling in place as ESLint, Prettier, TypeScript, conventional commits etc.
- Workspaces:
  - It comes with two workspaces `apps` and `packages`.
  - All configurations (eslint, jest, material ui etc.) in `packages` are always prefixed with "config-" and imported into other workspaces directly from source without building (never transpiled).
  - All other `packages` beside configurations are always being built/transpiled and output to `dist/` folder.
- For consistency all applications in monorepo are built with Next.js, but can be easily replaced with any other React framework/tooling (Vite, Remix etc.)
- Monorepo doesn't implement any high-level architectures (islands, micro-frontends), but is prepared with that in mind, so it can be easily extended (page composition, adding shared state etc.)

[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[build-badge]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/build.yml/badge.svg
[build-url]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/build.yml
[lint-badge]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/lint.yml/badge.svg
[lint-url]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/lint.yml
[tsc-badge]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/tsc.yml/badge.svg
[tsc-url]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/tsc.yml
[test-badge]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/test.yml

<!-- Deployments  App -->

[deploy-app-prod-badge]: https://img.shields.io/badge/App-prod-blue?logo=netlify&logoColor=white
[deploy-app-prod-url]: https://turbo-app-prod.netlify.app/
[deploy-app-stage-badge]: https://img.shields.io/badge/App-stage-blue?logo=netlify&logoColor=white
[deploy-app-stage-url]: https://turbo-app-stage.netlify.app/
[deploy-app-storybook-badge]: https://img.shields.io/badge/App-storybook-blue?logo=storybook&logoColor=white
[deploy-app-storybook-url]: https://turbo-app-storybook.netlify.app/

<!-- Deployments  Website -->

[deploy-website-prod-badge]: https://img.shields.io/badge/Website-prod-blue?logo=netlify&logoColor=white
[deploy-website-prod-url]: https://turbo-website-prod.netlify.app/
[deploy-website-stage-badge]: https://img.shields.io/badge/Website-stage-blue?logo=netlify&logoColor=white
[deploy-website-stage-url]: https://turbo-website-stage.netlify.app/
[deploy-website-storybook-badge]: https://img.shields.io/badge/Website-storybook-blue?logo=storybook&logoColor=white
[deploy-website-storybook-url]: https://turbo-website-storybook.netlify.app/

<!-- Deployments  UI -->

[deploy-ui-prod-badge]: https://img.shields.io/badge/UI%20(shared%20lib)-prod-blue?logo=storybook&logoColor=white
[deploy-ui-prod-url]: https://turbo-ui-prod.netlify.app/
[deploy-ui-stage-badge]: https://img.shields.io/badge/UI%20(shared%20lib)-stage-blue?logo=storybook&logoColor=white
[deploy-ui-stage-url]: https://turbo-ui-stage.netlify.app/
