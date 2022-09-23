import openapiTS, { SwaggerToTSOptions } from 'openapi-typescript';

const URL_SCHEMA_PET_STORE =
  'https://raw.githubusercontent.com/swagger-api/swagger-petstore/master/src/main/resources/openapi.yaml';

const OPENAPI_TS_OPTIONS: SwaggerToTSOptions = {
  prettierConfig: '../../.prettierrc',
  immutableTypes: true,
  exportType: true,
};

// --output ./src/common/api/petstore/api-types-generated/index.ts
const GENERATED_API_TYPES_PATH = './index.ts';

const output = await openapiTS(URL_SCHEMA_PET_STORE, OPENAPI_TS_OPTIONS);
console.log('🔎 Log ~ output', output);
