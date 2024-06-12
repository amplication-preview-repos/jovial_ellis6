import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
  role?: "Option1";
};
