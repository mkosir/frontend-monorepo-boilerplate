# Turborepo / Next.js / TypeScript boilerplate

[![CI][lint-badge]][lint-url]
[![CI][tsc-badge]][tsc-url]
[![CI][build-badge]][build-url]
[![CI][test-badge]][test-url]

Minimal Turborepo boilerplate.

# Commands

Bellow commands will be executed on monorepo level - on all apps and packages where npm script exists.

| Command             | Description                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| prepare             | Setup git hooks with Husky (executes on npm install)                                            |
| build               | Build all apps and packages                                                                     |
| dev                 | Start all apps                                                                                  |
| lint                | Lint all apps and packages                                                                      |
| lint-stage-husky    | Run lint-staged on every commit                                                                 |
| tsc                 | Run TypeScript compiler                                                                         |
| test                | Run tests on all apps and packages                                                              |
| storybook           | Start storybooks on all apps and packages                                                       |
| format-lint         | Lint formatting with Prettier on monorepo                                                       |
| format-fix          | Fix formatting with Prettier on monorepo                                                        |
| commit              | Run Commitizen on staged file                                                                   |
| clean               | Remove installed, generated and cached folders on monorepo (node_modules, coverage, .next etc.) |
| update-dependencies | Update dependencies to their latest versions on monorepo                                        |

[lint-badge]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/lint.yml/badge.svg
[lint-url]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/lint.yml
[tsc-badge]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/tsc.yml/badge.svg
[tsc-url]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/tsc.yml
[build-badge]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/build.yml/badge.svg
[build-url]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/build.yml
[test-badge]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/mkosir/turborepo-boilerplate/actions/workflows/test.yml
