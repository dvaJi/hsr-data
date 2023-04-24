export type Set = {
  id: string;
  name: string;
  desc: number;
};

export interface Relic {
  id: string;
  name: string;
  desc: string;
  twopc_set: string;
  fourpc_set?: string;
  sets: Set[];
}
