import { promises } from 'fs';

import chalk from 'chalk';
import openapiTS, { SwaggerToTSOptions } from 'openapi-typescript';

const URL_SCHEMA_PET_STORE =
  'https://raw.githubusercontent.com/swagger-api/swagger-petstore/master/src/main/resources/openapi.yaml';

const OPENAPI_TS_OPTIONS: SwaggerToTSOptions = {
  prettierConfig: '../../.prettierrc',
  immutableTypes: true,
  exportType: true,
  formatter: (node) => {
    if (node.format === 'date-time') {
      return 'Date';
    }
  },
};

try {
  const generatedOutput = await openapiTS(URL_SCHEMA_PET_STORE, OPENAPI_TS_OPTIONS);

  const GENERATED_API_TYPES_PATH = './src/common/api/petstore/api-types/index.ts';
  await promises.writeFile(GENERATED_API_TYPES_PATH, generatedOutput);

  console.log(chalk.blue('API types updated successfully!'));
} catch (error) {
  console.log(chalk.red('Error occurred while trying to update API types.'));
  console.log(chalk.red(error));
}
