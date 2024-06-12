import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type AgentAssignment = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  property?: Property | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
