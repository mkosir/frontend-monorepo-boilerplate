import { writeFileSync } from 'fs';

import openapiTS, { SwaggerToTSOptions } from 'openapi-typescript';

const URL_SCHEMA_PET_STORE =
  'https://raw.githubusercontent.com/swagger-api/swagger-petstore/master/src/main/resources/openapi.yaml';

const OPENAPI_TS_OPTIONS: SwaggerToTSOptions = {
  prettierConfig: '../../.prettierrc',
  immutableTypes: true,
  exportType: true,
};

const generatedOutput = await openapiTS(URL_SCHEMA_PET_STORE, OPENAPI_TS_OPTIONS);

const GENERATED_API_TYPES_PATH = './src/common/api/petstore/api-types/index.ts';
writeFileSync(GENERATED_API_TYPES_PATH, generatedOutput);
