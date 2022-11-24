import { OpenAPITSOptions } from 'openapi-typescript';

type Transform = OpenAPITSOptions['transform'];

export const transform: Transform = (schemaObject) => {
  if (schemaObject.format === 'date-time') {
    return 'PetDate';
  }
};
