export interface LightCone {
  _id: number;
  id: string;
  name: string;
  rarity: number;
  pathType: string;
  pathTypeText: string;
  effectName: string;
  effectTemplate: string;
  superImpositions: SuperImposition[];
  ascend: Ascend[];
}

export interface Ascend {
  promotion: number;
  maxLevel: number;
  levelReq?: number;
  attackBase: number;
  attackAdd: number;
  hpBase: number;
  hpAdd: number;
  defenseBase: number;
  defenseAdd: number;
  materials: Material[];
}

export interface Material {
  _id: number;
  id: string;
  name: string;
  amount: number;
}

export interface SuperImposition {
  rank: number;
  effect: string;
  params: string[];
}
