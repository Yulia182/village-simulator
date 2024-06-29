export interface Type {
  type: string;
  benefit: Value;
  cost: Value[];
}

export interface Value {
  resource: string;
  amount: number;
}

export const ImprovementsArray: Type[] = [
  {
    type: "Pyramid",
    benefit: { resource: "People", amount: 5 },
    cost: [
      { resource: "Bricks", amount: 5 },
      { resource: "Papyrus", amount: 5 },
      { resource: "Water", amount: 5 },
      { resource: "Fish", amount: 1 },
    ],
  },
  {
    type: "Sphinks",
    benefit: { resource: "Papyrus", amount: 10 },
    cost: [
      { resource: "People", amount: 1 },
      { resource: "Water", amount: 2 },
    ],
  },
  {
    type: "Market",
    benefit: { resource: "Fish", amount: 5 },
    cost: [
      { resource: "People", amount: 1 },
      { resource: "Papyrus", amount: 2 },
      { resource: "Water", amount: 2 },
    ],
  },
  {
    type: "Masonry",
    benefit: { resource: "Bricks", amount: 10 },
    cost: [{ resource: "People", amount: 1 }],
  },
  {
    type: "Aqueduct",
    benefit: { resource: "Water", amount: 10 },
    cost: [
      { resource: "People", amount: 1 },
      { resource: "Papyrus", amount: 2 },
    ],
  },
];
