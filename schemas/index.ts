import { SchemaTypeDefinition } from "sanity";
import post from "./post";
import blockContent from "./blockContent";

export const schemaTypes = [post];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent],
};
