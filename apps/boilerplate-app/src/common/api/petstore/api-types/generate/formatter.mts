import { SchemaFormatter } from 'openapi-typescript';

export const formatter: SchemaFormatter = (node) => {
  if (node.format === 'shipDate') {
    return 'PetDate';
  }
};
