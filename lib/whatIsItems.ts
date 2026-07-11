import { Heart, MapPin, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WhatIsItem = {
  key: "catalog" | "local" | "passion";
  icon: LucideIcon;
};

export const WHAT_IS_ITEMS: WhatIsItem[] = [
  { key: "catalog", icon: Search },
  { key: "local", icon: MapPin },
  { key: "passion", icon: Heart },
];
