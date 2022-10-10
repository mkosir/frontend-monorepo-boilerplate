# Conventions

Since "consistency is the key" majority of rules is enforced by automated tooling as ESLint, TypeScript, Prettier, etc.  
Still certain design and architectural decisions must be followed which are covered with described conventions bellow.

## Code Collocation

- Every application or package in monorepo has project files/folders organized and grouped by **feature**.
- **Place code as close to where it's relevant as possible.**
- Deep folder nesting does not represent an issue.
- [Relevant article](https://kentcdodds.com/blog/colocation) on code collocation.

## Project Structure

Every application has following file/folder structure:

```shell
apps/
├─ product-manager/
│  ├─ common/
│  │  ├─ components/
│  │  │  ├─ ProductTitle/
│  │  │  ├─ ...
│  │  │  └─ index.tsx
│  │  ├─ consts/
│  │  │  ├─ paths.ts
│  │  │  └─ ...
│  │  └─ types/
│  ├─ modules/
│  │  ├─ HomePage/
│  │  ├─ ProductAddPage/
│  │  ├─ ProductPage/
│  │  ├─ ProductsPage/
│  │  │  ├─ api/
│  │  │  │  └─ useGetProducts/
│  │  │  ├─ components/
│  │  │  │  ├─ ProductItem/
│  │  │  │  ├─ ProductsStatistics/
│  │  │  │  └─ ...
│  │  │  ├─ utils/
│  │  │  │  └─ filterProductsByType/
│  │  │  └─ index.tsx
│  │  ├─ ...
│  │  └─ index.tsx
│  └─ pages/
│     ├─ products/
│     │  ├─ [id].tsx
│     │  ├─ add.tsx
│     │  ├─ index.tsx
│     ├─ _app.tsx
│     ├─ index.tsx
│     └─ ...
├─ warehouse/
├─ admin-dashboard/
└─ ...
```

- `common` folder is responsible for implementations that are truly used across application, where it should be used sparingly since codebase tries to follow grouped by feature project structure as much as possible
- `modules` folder is responsible for implementation of each individual page (routed from `pages` folder)
- `pages` folder serves as a router, where its only responsibility is to define routes

## Data immutability

Majority of the data should be immutable (`Readonly`, `ReadonlyArray`). Always return new array, object etc. with the changes, not the original.

## Functions

Since React components are also functions, convention should be followed as much as possible.

- Function should have single responsibility.
- Function should be stateless where for the same input arguments they return same value every single time.
- Function should accept at least one argument and return data.
- Function should not have side effects, but be pure. It's implementation should not modify or access variable value outside its local environment (global state, fetching etc.).

Sometimes **potential** exceptions are react components and hooks.

<details>
<summary>Exception examples</summary>

```ts
const Logo = () => {
  return (
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40"></circle>
      <text x="50%" y="50%">
        Icon
      </text>
    </svg>
  );
};

const ProductsPage = () => {
  const { data: products } = useFetchProducts();

  return (
    <div>
      {products.map((product) => (
        <ProductItem name={product.name} />
      ))}
    </div>
  );
};

const useGetUsers: UseGeUsers = ({ country, isActive }) =>
  useQuery(['fetchUsers', { country, isActive }], () => fetchUsers({ country, isActive }));
```

</details>

## Naming

Strive to keep naming conventions consistent and readable, because another person will maintain the code you have written.  
There is no convention on cache invalidation, but for the second hardest thing, bellow conventions should be followed:

- React components - Pascal case (`ProductItem`, `ProductsPage`)
- Prop Types - component name with "Props" postfix `[ComponentName]Props` - Pascal case (`ProductItemProps`, `ProductsPageProps`)
- Functions - Camel case (`filterProductsByType`, `useGetProducts`)
- Variables
  - Locals (`products`, `productsFiltered`)
  - Booleans are prefixed with `is`, `has` (`isProduct`)
  - Constants (`PRODUCT_ID`)
  - Enums are singular with values as constants
    ```ts
    enum OrderStatus {
      PENDING,
      FULFILLED,
      ERROR,
    }
    ```

## React Components

### Component Types

- Container:
  - All container components have postfix "Container" or "Page" `[ComponentName]Container|Page`
  - Each feature has a container component (`AddUserContainer.tsx`, `EditProductContainer.tsx`, `ProductsPage.tsx` etc.)
  - Includes business logic.
  - API integration.
  - Expected file/folder structure:
  ```
  ProductsPage/
  ├─ api/
  │  └─ useGetProducts/
  ├─ components/
  │  └─ ProductItem/
  ├─ utils/
  │  └─ filterProductsByType/
  └─ index.tsx
  ```
- UI - Feature specific
  - Representational components that are designed to fulfill feature requirements.
  - Should follow functions conventions as much as possible.
  - No API integration.
  - Expected file/folder structure:
  ```
  ProductItem/
  ├─ index.tsx
  ├─ styled.tsx
  ├─ ProductItem.stories.tsx
  └─ ProductItem.test.tsx
  ```
- UI - Design system
  - Reusable/generic types of components used throughout whole monorepo.
  - Expected file/folder structure:
  ```
  Button/
  ├─ index.tsx
  ├─ styled.tsx
  ├─ Button.stories.tsx
  └─ Button.test.tsx
  ```

### Passing Data

- Prop drilling should not become an issue, if it does [break out your render method](https://kentcdodds.com/blog/prop-drilling#how-can-we-avoid-problems-with-prop-drilling) and keep in mind that React components are functions, which should have single responsibility.
- Component composition is not allowed.
- Global state is not allowed.
- Fetching of data is only allowed in container components.

## Tests

Test can be run through npm scripts, but it's highly encouraged to use [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) VS code extension so any monorepo app/package single test can be run [instantly](https://github.com/firsttris/vscode-jest/raw/master/public/vscode-jest.gif).

```shell
code --install-extension firsttris.vscode-jest-runner
```

- All test descriptions should follow naming convention as `it('should ... when ...')`.
- Snapshot tests are not allowed (except if truly needed in design system library).

## Conventions enforced by automated tooling

List and reasoning of some conventions enforced by automated tooling:

- Whole monorepo codebase is written in TypeScript strict mode with enabled ESlint [Strict Configuration](https://typescript-eslint.io/docs/linting/configs#strict)
- All types are defined with `type` alias. In case of rare exceptions (extending third-party types) `interface` can be used with disabling linter:

  ```ts
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  ```

- Arrays are defined with `generic` syntax.

  ```ts
  const x: Array<string> = ['a', 'b'];
  const y: ReadonlyArray<string> = ['a', 'b'];
  ```

- Default export is not allowed. In case of exception this rule is disabled in `.eslintrc.js` (Next.js pages etc.)
- All test descriptions follows naming convention as `it('should ... when ...')`.
