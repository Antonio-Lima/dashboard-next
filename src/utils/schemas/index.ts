import * as zod from "zod";

export const schemaResearch = zod.object({
  research: zod.string().min(1, "Campo obrigatório"),
});
