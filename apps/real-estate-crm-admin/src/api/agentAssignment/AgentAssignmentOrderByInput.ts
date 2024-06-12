import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
