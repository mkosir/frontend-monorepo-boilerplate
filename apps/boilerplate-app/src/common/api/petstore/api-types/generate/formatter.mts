import { SchemaFormatter } from 'openapi-typescript';

export const formatter: SchemaFormatter = (node) => {
  if (node.items === 'shipDate') {
    return 'PetDate';
  }
};
