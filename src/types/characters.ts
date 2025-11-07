export interface Character {
  _id: number;
  id: string;
  name: string;
  description: string;
  rarity: number;
  combat_type: CombatType;
  path: CombatType;
  faction: Faction;
  cv: Cv;
  ascends: Ascend[];
  skills: CharacterSkill[];
  eidolons: Eidolon[];
  skillTreePoints: SkillTreePoint[];
  memosprite?: Memosprite;
}

export interface Ascend {
  promotion: number;
  maxLevel: number;
  materials: Faction[];
  attackBase: number;
  attackAdd: number;
  hpBase: number;
  hpAdd: number;
  defenseBase: number;
  defenseAdd: number;
  crate: number;
  cdmg: number;
  aggro: number;
  speedBase: number;
  speedAdd: number;
}

export interface Faction {
  _id?: number;
  id: FactionID;
  name: string;
  amount?: number;
}

export enum FactionID {
  AGlassOfTheBesottedEra = 'a_glass_of_the_besotted_era',
  AlienTreeSeed = 'alien_tree_seed',
  Amphoreus = 'amphoreus',
  AncestralHymn = 'ancestral_hymn',
  AncientEngine = 'ancient_engine',
  AncientPart = 'ancient_part',
  AncientSpindle = 'ancient_spindle',
  AnotherWorld = 'another_world',
  ArrowOfTheBeastHunter = 'arrow_of_the_beast_hunter',
  ArrowOfTheDemonSlayer = 'arrow_of_the_demon_slayer',
  ArrowOfTheStarchaser = 'arrow_of_the_starchaser',
  ArtifexsCogwheel = 'artifexs_cogwheel',
  ArtifexsGyreheart = 'artifexs_gyreheart',
  ArtifexsModule = 'artifexs_module',
  AscendantDebris = 'ascendant_debris',
  AstralExpress = 'astral_express',
  AuspiceSliver = 'auspice_sliver',
  Belobog = 'belobog',
  BjaOfConsciousness = 'bja_of_consciousness',
  BorisinTeeth = 'borisin_teeth',
  BrokenTeethOfIronWolf = 'broken_teeth_of_iron_wolf',
  CelestialSection = 'celestial_section',
  CharredBudOfTwilight = 'charred_bud_of_twilight',
  ChordalMirage = 'chordal_mirage',
  ConquerorsWill = 'conquerors_will',
  CountertemporalShot = 'countertemporal_shot',
  CouragetornChest = 'couragetorn_chest',
  Credit = 'credit',
  CrystalMeteorites = 'crystal_meteorites',
  DarkveilMoonlight = 'darkveil_moonlight',
  DaythunderAnamnesis = 'daythunder_anamnesis',
  DestinedExpiration = 'destined_expiration',
  DestroyersFinalRoad = 'destroyers_final_road',
  DivineAmber = 'divine_amber',
  DreamCollectionComponent = 'dream_collection_component',
  DreamFlamer = 'dream_flamer',
  DreamFlowValve = 'dream_flow_valve',
  DreamFridge = 'dream_fridge',
  DreamMakingEngine = 'dream_making_engine',
  DynamicOutlining = 'dynamic_outlining',
  EchoingWail = 'echoing_wail',
  EndothermChitin = 'endotherm_chitin',
  EnduranceOfBronze = 'endurance_of_bronze',
  EnigmaticEctostella = 'enigmatic_ectostella',
  EternalLament = 'eternal_lament',
  EtherealOmen = 'ethereal_omen',
  ExquisiteColoredDraft = 'exquisite_colored_draft',
  ExtinguishedCore = 'extinguished_core',
  FearstompedFlesh = 'fearstomped_flesh',
  FierySpirit = 'fiery_spirit',
  FirmamentNote = 'firmament_note',
  FlowerOfEternity = 'flower_of_eternity',
  FlowerOfLaya = 'flower_of_laya',
  FragmentsOfImpression = 'fragments_of_impression',
  GalaxyRanger = 'galaxy_ranger',
  GardenOfRecollection = 'garden_of_recollection',
  GelidChitin = 'gelid_chitin',
  GlimmeringCore = 'glimmering_core',
  GloryaspersedTorso = 'gloryaspersed_torso',
  GoldenCrownOfThePastShadow = 'golden_crown_of_the_past_shadow',
  GuardiansLament = 'guardians_lament',
  HarbingerOfStrife = 'harbinger_of_strife',
  HarmonicTune = 'harmonic_tune',
  HeavenIncinerator = 'heaven_incinerator',
  HeavenlyMelody = 'heavenly_melody',
  HertaSpaceStation = 'herta_space_station',
  HornOfSnow = 'horn_of_snow',
  IPCWorkPermit = 'ipc_work_permit',
  ImmortalAeroblossom = 'immortal_aeroblossom',
  ImmortalLumintwig = 'immortal_lumintwig',
  ImmortalScionette = 'immortal_scionette',
  IntelligentsiaGuild = 'intelligentsia_guild',
  InterastralPeaceCorporation = 'interastral_peace_corporation',
  InvasiveClot = 'invasive_clot',
  KeyOfInspiration = 'key_of_inspiration',
  KeyOfKnowledge = 'key_of_knowledge',
  KeyOfWisdom = 'key_of_wisdom',
  LifelessBlade = 'lifeless_blade',
  LightningCrownOfThePastShadow = 'lightning_crown_of_the_past_shadow',
  LostEchoOfTheSharedWish = 'lost_echo_of_the_shared_wish',
  LupitoxinSawteeth = 'lupitoxin_sawteeth',
  MaskedFools = 'masked_fools',
  MeteoricBullet = 'meteoric_bullet',
  MoonRageFang = 'moon_rage_fang',
  MyriadFruit = 'myriad_fruit',
  NailOfTheApe = 'nail_of_the_ape',
  NailOfTheBeastCoffin = 'nail_of_the_beast_coffin',
  NetherworldToken = 'netherworld_token',
  NourishingHoney = 'nourishing_honey',
  OathOfSteel = 'oath_of_steel',
  ObsidianOfDesolation = 'obsidian_of_desolation',
  ObsidianOfDread = 'obsidian_of_dread',
  ObsidianOfObsession = 'obsidian_of_obsession',
  PastEvilsOfTheBoreholePlanetDisaster = 'past_evils_of_the_borehole_planet_disaster',
  Penacony = 'penacony',
  RagingHeart = 'raging_heart',
  RegretOfInfiniteOchema = 'regret_of_infinite_ochema',
  RoughSketch = 'rough_sketch',
  SafeguardOfAmber = 'safeguard_of_amber',
  ScatteredStardust = 'scattered_stardust',
  SeaSirensTornFin = 'sea_sirens_torn_fin',
  SearingSteelBlade = 'searing_steel_blade',
  SeedOfAbundance = 'seed_of_abundance',
  SeedlingOfManas = 'seedling_of_manas',
  ShapeShiftersLightningStaff = 'shape_shifters_lightning_staff',
  ShardsOfDesires = 'shards_of_desires',
  ShatteredBlade = 'shattered_blade',
  SilvermaneBadge = 'silvermane_badge',
  SilvermaneInsignia = 'silvermane_insignia',
  SilvermaneMedal = 'silvermane_medal',
  SproutOfLife = 'sprout_of_life',
  SquirmingCore = 'squirming_core',
  StarfireEssence = 'starfire_essence',
  StellarisSymphony = 'stellaris_symphony',
  StellaronHunters = 'stellaron_hunters',
  StormEye = 'storm_eye',
  SuppressingEdict = 'suppressing_edict',
  TattersOfThought = 'tatters_of_thought',
  TheKnightsOfBeauty = 'the_knights_of_beauty',
  TheXianzhouLuofu = 'the_xianzhou_luofu',
  TheXianzhouYaoqing = 'the_xianzhou_yaoqing',
  TheXianzhouZhuming = 'the_xianzhou_zhuming',
  ThiefsInstinct = 'thiefs_instinct',
  TracksOfDestiny = 'tracks_of_destiny',
  UsurpersScheme = 'usurpers_scheme',
  VoidCastIron = 'void_cast_iron',
  WorldbreakerBlade = 'worldbreaker_blade',
}

export interface CombatType {
  id?: CombatTypeID;
  name: string;
}

export enum CombatTypeID {
  Abundance = 'abundance',
  AoEAttack = 'AoEAttack',
  Blast = 'Blast',
  Bounce = 'Bounce',
  Destruction = 'destruction',
  Enhance = 'Enhance',
  Erudition = 'erudition',
  Fire = 'fire',
  Harmony = 'harmony',
  Ice = 'ice',
  Imaginary = 'imaginary',
  Nihility = 'nihility',
  Physical = 'physical',
  Preservation = 'preservation',
  Quantum = 'quantum',
  Remembrance = 'remembrance',
  Restore = 'Restore',
  Servant = 'Servant',
  SingleAttack = 'SingleAttack',
  Support = 'Support',
  TheHunt = 'the_hunt',
  Thunder = 'thunder',
  Wind = 'wind',
}

export interface Cv {
  english: string;
  chinese: string;
  japanese: string;
  korean: string;
}

export interface Eidolon {
  _id: number;
  id: string;
  name: string;
  desc: string;
  unlockCost: UnlockCost[];
  extra: Extra[];
}

export interface Extra {
  id: number;
  name: string;
  desc: string;
  params: any[];
  type: number;
  icon: string;
}

export interface UnlockCost {
  ItemID: number;
  ItemNum: number;
}

export interface Memosprite {
  name: string;
  icon: Icon;
  hpBase: string;
  hpInherit: string;
  hpSkill?: number;
  speedBase: string;
  speedInherit: string;
  aggro: number;
  skills: MemospriteSkill[];
}

export enum Icon {
  SpriteOutputServantIconTeam11402BPNG = 'SpriteOutput/ServantIconTeam/11402B.png',
  SpriteOutputServantIconTeam11407BPNG = 'SpriteOutput/ServantIconTeam/11407B.png',
  SpriteOutputServantIconTeam11409BPNG = 'SpriteOutput/ServantIconTeam/11409B.png',
  SpriteOutputServantIconTeam11413BPNG = 'SpriteOutput/ServantIconTeam/11413B.png',
  SpriteOutputServantIconTeam11415BPNG = 'SpriteOutput/ServantIconTeam/11415B.png',
  SpriteOutputServantIconTeam18007BPNG = 'SpriteOutput/ServantIconTeam/18007B.png',
}

export interface MemospriteSkill {
  id: number;
  name: string;
  desc: string;
  simpleDesc: string;
  type: CombatType;
  tag: CombatType;
  spBase: number | null;
  bpNeed: number;
  spMultipleRatio: number;
  delayRatio: number;
  showStanceList: number[];
  extra: Extra[];
  level: PurpleLevel[];
  hideInUI?: boolean;
  link?: Link;
}

export interface PurpleLevel {
  level: number;
  params: number[];
}

export interface Link {
  linkAvatar: number;
  figure: string;
  icon: string;
  order: number;
}

export interface SkillTreePoint {
  id: number;
  type: number;
  children: SkillTreePoint[];
  embedBonusSkill?: EmbedBonusSkill;
  embedBuff?: EmbedBuff;
}

export interface EmbedBonusSkill {
  id: string;
  name: string;
  desc: string;
  type: string;
  tag: string;
  levels: EmbedBonusSkillLevel[];
}

export interface EmbedBonusSkillLevel {
  level: number;
  params: number[];
  materials?: Faction[];
}

export interface EmbedBuff {
  id: EmbedBuffID;
  name: string;
  levelReq: number;
  promotionReq: number;
  statusList: StatusList[];
  materials: Faction[];
}

export enum EmbedBuffID {
  ABodyBrewedByTears = 'a_body_brewed_by_tears',
  AtkBoost = 'atk_boost',
  BaddiesTrouble = 'baddies_trouble',
  BreakBoost = 'break_boost',
  BreathScorchesTheShadow = 'breath_scorches_the_shadow',
  ClawSplitsTheVeil = 'claw_splits_the_veil',
  CritDmgBoost = 'crit_dmg_boost',
  CritRateBoost = 'crit_rate_boost',
  DefBoost = 'def_boost',
  DmgBoostFire = 'dmg_boost_fire',
  DmgBoostIce = 'dmg_boost_ice',
  DmgBoostImaginary = 'dmg_boost_imaginary',
  DmgBoostLightning = 'dmg_boost_lightning',
  DmgBoostPhysical = 'dmg_boost_physical',
  DmgBoostQuantum = 'dmg_boost_quantum',
  DmgBoostWind = 'dmg_boost_wind',
  EffectHitRateBoost = 'effect_hit_rate_boost',
  EffectResBoost = 'effect_res_boost',
  FriendsTogether = 'friends_together',
  HPBoost = 'hp_boost',
  RaincloudsTimeToGo = 'rainclouds_time_to_go',
  RemembranceWhirlingLikeRain = 'remembrance_whirling_like_rain',
  SolitudeDriftingInMurk = 'solitude_drifting_in_murk',
  SpdBoost = 'spd_boost',
  TakeSkyInHand = 'take_sky_in_hand',
  ThisOdeToAllLives = 'this_ode_to_all_lives',
  ThornedSnare = 'thorned_snare',
  WaitingInEveryPast = 'waiting_in_every_past',
}

export interface StatusList {
  key: string;
  value: number;
}

export interface CharacterSkill {
  _id: number;
  id: string;
  name: string;
  desc: string;
  simpleDesc: string;
  type: Type;
  tag?: string;
  spBase: number | null;
  bpNeed: number | null;
  bpAdd: number | null;
  showStanceList: number[];
  extra: Extra[];
  levels: EmbedBonusSkillLevel[];
  skillComboValueDelta?: SkillComboValueDelta;
}

export interface SkillComboValueDelta {
  Value: number;
}

export enum Type {
  ATQBásico = 'ATQ básico',
  ATQNormale = 'ATQ normale',
  BasicATK = 'Basic ATK',
  BíKỹ = 'Bí Kỹ',
  ChiếnKỹ = 'Chiến Kỹ',
  Compétence = 'Compétence',
  Fertigkeit = 'Fertigkeit',
  HabilidadBásica = 'Habilidad básica',
  HabilidadDefinitiva = 'Habilidad definitiva',
  Perícia = 'Perícia',
  PeríciaSuprema = 'Perícia Suprema',
  Skill = 'Skill',
  Standardangriff = 'Standardangriff',
  Talent = 'Talent',
  Talento = 'Talento',
  Technik = 'Technik',
  Technique = 'Technique',
  ThiênPhú = 'Thiên Phú',
  TuyệtKỹ = 'Tuyệt Kỹ',
  TypeATQBásico = 'ATQ Básico',
  Técnica = 'Técnica',
  TấnCôngThường = 'Tấn Công Thường',
  Ultimate = 'Ultimate',
  Ultime = 'Ultime',
  БазоваяАтака = 'Базовая атака',
  Навык = 'Навык',
  Сверхспособность = 'Сверхспособность',
  Талант = 'Талант',
  Техника = 'Техника',
  ท่าไม้ตาย = 'ท่าไม้ตาย',
  พรสวรรค์ = 'พรสวรรค์',
  สกิลต่อสู้ = 'สกิลต่อสู้',
  เทคนิค = 'เทคนิค',
  โจมตีปกติ = 'โจมตีปกติ',
  天賦 = '天賦',
  天赋 = '天赋',
  必殺技 = '必殺技',
  战技 = '战技',
  戦闘スキル = '戦闘スキル',
  戰技 = '戰技',
  普攻 = '普攻',
  普通攻擊 = '普通攻擊',
  秘技 = '秘技',
  終結技 = '終結技',
  终结技 = '终结技',
  通常攻撃 = '通常攻撃',
  비술 = '비술',
  일반공격 = '일반 공격',
  전투스킬 = '전투 스킬',
  특성 = '특성',
  필살기 = '필살기',
}
