import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
  role?: "Option1" | null;
};
