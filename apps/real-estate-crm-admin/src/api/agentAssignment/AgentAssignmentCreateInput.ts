import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  client?: ClientWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
  role?: "Option1" | null;
};
