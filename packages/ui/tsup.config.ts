import { defineConfig } from 'tsup';

const tsupConfig = defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom'],
  splitting: false,
  minify: true,
  clean: true,
  tsconfig: 'tsconfig.prod.json',
});

// eslint-disable-next-line import/no-default-export
export default tsupConfig;
