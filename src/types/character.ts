export type CharacterVoice = {
  english: string;
  chinese: string;
  japanese: string;
  korean: string;
};

export type Material = {
  id: string;
  name: string;
  amount: number;
};

export type Ascend = {
  level: number;
  stats: [string, string[]][];
  materials: Material[];
};

export type SkillLevel = {
  level: number;
  stats: [string, string][];
  materials?: Material[];
};

export type Skill = {
  id: string;
  name: string;
  desc: string;
  type: string;
  levels: SkillLevel[];
};

export type Eidolon = {
  id: string;
  name: string;
  desc: string;
};

export type Ascension = {
  id: string;
  name: string;
  desc: string;
  level: number;
};

export interface Character {
  id: string;
  name: string;
  description: string;
  rarity: number;
  combat_type: string;
  path: string;
  faction: string;
  cv: CharacterVoice;
  basic_stats: {
    hp: [number, number];
    atk: [number, number];
    def: [number, number];
    speed: [number, number];
  };
  ascends: Ascend[];
  skills: Skill[];
  eidolons: Eidolon[];
  traces: {
    stats: [string, string][];
    ascensions: Ascension[];
  };
}
