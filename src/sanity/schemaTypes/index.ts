import { type SchemaTypeDefinition } from 'sanity'
import resource from './resource'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [resource],
}
