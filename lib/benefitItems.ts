import {
  CalendarCheck,
  Eye,
  Sparkles,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type BenefitItem = {
  key: "visibility" | "registrations" | "profile" | "support";
  icon: LucideIcon;
};

export const BENEFIT_ITEMS: BenefitItem[] = [
  { key: "visibility", icon: Eye },
  { key: "registrations", icon: CalendarCheck },
  { key: "profile", icon: Sparkles },
  { key: "support", icon: UserCheck },
];
