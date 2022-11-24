import { OpenAPITSOptions } from 'openapi-typescript';

type Transform = OpenAPITSOptions['transform'];

export const transform: Transform = (schemaObject) => {
  if (schemaObject.format === 'date-time') {
    return 'PetDate';
  }
};

type PostTransform = OpenAPITSOptions['postTransform'];

export const postTransform: PostTransform = (schemaObject, options) => {
  if (schemaObject === 'string' && options.path === '#/components/schemas/ApiResponse') {
    return "'custom-string'";
  }
};
