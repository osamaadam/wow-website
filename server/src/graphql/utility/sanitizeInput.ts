import { gqlDefaultInput } from "src/types";

export const sanitizeInput = <Args, Parent>(
  input: gqlDefaultInput<Args, Parent>
) => {
  return {
    parent: input[0],
    args: input[1],
    context: input[2],
    info: input[3],
  };
};
