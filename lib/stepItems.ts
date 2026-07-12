export type StepItem = {
  key: "apply" | "confirm" | "launch";
  n: string;
};

export const STEP_ITEMS: StepItem[] = [
  { key: "apply", n: "01" },
  { key: "confirm", n: "02" },
  { key: "launch", n: "03" },
];
