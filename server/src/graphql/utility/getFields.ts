import { GraphQLResolveInfo } from "graphql";

export const getFields = (info: GraphQLResolveInfo) => {
  const fields = info.fieldNodes[0].selectionSet.selections.map(
    (field: any) => field.name.value
  );
  const sanitizedFields = fields.filter((field) => field.match(/^[^_]/));
  return sanitizedFields;
};
