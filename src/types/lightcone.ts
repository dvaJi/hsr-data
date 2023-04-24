export type Material = {
  id: string;
  name: string;
  amount: number;
};

export type Ascend = {
  level: number;
  stats: [string, string][];
  materials?: Material[];
};

export interface LightCone {
  id: string;
  name: string;
  desc: string;
  basic_stats: {
    hp: [number, number];
    atk: [number, number];
    def: [number, number];
  };
  info: {
    path: string;
    rarity: number;
    skill_type: string;
    source: string;
  };
  skill: {
    name: string;
    desc: string;
  };
  ascend: Ascend[];
}
