export const getFields = (info: any) => {
  const fields: any[] = info.fieldNodes[0].selectionSet.selections.map(
    (field: any) => field.name.value
  );
  return fields;
};
