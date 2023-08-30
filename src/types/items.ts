export interface Items {
    _id:         number;
    id:          string;
    name:        string;
    description: string;
    story:       string;
    rarity:      number;
    source:      Source[];
    type:        Type;
}

export interface Source {
    description: string;
    recipe:      Recipe[];
}

export interface Recipe {
    materialCost:        MaterialCost[];
    specialMaterialCost: MaterialCost[];
    coinCost?:           number;
    worldLevelRequire?:  number;
}

export interface MaterialCost {
    id:     number;
    name:   string;
    rarity: number;
    count:  number;
}

export interface Type {
    id?:   number;
    name?: string;
}
