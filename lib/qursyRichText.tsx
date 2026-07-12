import type { ReactNode } from "react";

export const qursyRichText = {
  qursy: (chunks: ReactNode) => (
    <span className="font-script text-3xl font-bold leading-none text-foreground">
      {chunks}
    </span>
  ),
};
