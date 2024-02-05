export interface Warps {
    _id:                  number;
    id:                   string;
    name:                 string;
    description:          string;
    warpType:             WarpType;
    warpTypeText:         string;
    imageIconTab:         string;
    imageIconTabSelected: string;
    sortId:               number;
}

export enum WarpType {
    AvatarUp = "AvatarUp",
    Newbie = "Newbie",
    Normal = "Normal",
    WeaponUp = "WeaponUp",
}
