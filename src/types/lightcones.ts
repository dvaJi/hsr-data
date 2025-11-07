export interface LightCone {
  _id: number;
  id: string;
  name: string;
  desc: string;
  rarity: number;
  pathType: PathType;
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
  id: ID;
  name: string;
  amount: number;
}

export enum ID {
  AlienTreeSeed = 'alien_tree_seed',
  AncestralHymn = 'ancestral_hymn',
  AncientEngine = 'ancient_engine',
  AncientPart = 'ancient_part',
  AncientSpindle = 'ancient_spindle',
  ArrowOfTheBeastHunter = 'arrow_of_the_beast_hunter',
  ArrowOfTheDemonSlayer = 'arrow_of_the_demon_slayer',
  ArrowOfTheStarchaser = 'arrow_of_the_starchaser',
  ArtifexsCogwheel = 'artifexs_cogwheel',
  ArtifexsGyreheart = 'artifexs_gyreheart',
  ArtifexsModule = 'artifexs_module',
  BjaOfConsciousness = 'bja_of_consciousness',
  BorisinTeeth = 'borisin_teeth',
  CelestialSection = 'celestial_section',
  ConquerorsWill = 'conquerors_will',
  CountertemporalShot = 'countertemporal_shot',
  CouragetornChest = 'couragetorn_chest',
  Credit = 'credit',
  CrystalMeteorites = 'crystal_meteorites',
  DestinedExpiration = 'destined_expiration',
  DivineAmber = 'divine_amber',
  DreamCollectionComponent = 'dream_collection_component',
  DreamFlowValve = 'dream_flow_valve',
  DreamMakingEngine = 'dream_making_engine',
  DynamicOutlining = 'dynamic_outlining',
  EchoingWail = 'echoing_wail',
  EnduranceOfBronze = 'endurance_of_bronze',
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
  GlimmeringCore = 'glimmering_core',
  GloryaspersedTorso = 'gloryaspersed_torso',
  HarmonicTune = 'harmonic_tune',
  HeavenIncinerator = 'heaven_incinerator',
  HeavenlyMelody = 'heavenly_melody',
  ImmortalAeroblossom = 'immortal_aeroblossom',
  ImmortalLumintwig = 'immortal_lumintwig',
  ImmortalScionette = 'immortal_scionette',
  KeyOfInspiration = 'key_of_inspiration',
  KeyOfKnowledge = 'key_of_knowledge',
  KeyOfWisdom = 'key_of_wisdom',
  LifelessBlade = 'lifeless_blade',
  LupitoxinSawteeth = 'lupitoxin_sawteeth',
  MeteoricBullet = 'meteoric_bullet',
  MoonRageFang = 'moon_rage_fang',
  MyriadFruit = 'myriad_fruit',
  NourishingHoney = 'nourishing_honey',
  OathOfSteel = 'oath_of_steel',
  ObsidianOfDesolation = 'obsidian_of_desolation',
  ObsidianOfDread = 'obsidian_of_dread',
  ObsidianOfObsession = 'obsidian_of_obsession',
  RoughSketch = 'rough_sketch',
  SafeguardOfAmber = 'safeguard_of_amber',
  ScatteredStardust = 'scattered_stardust',
  SeedOfAbundance = 'seed_of_abundance',
  SeedlingOfManas = 'seedling_of_manas',
  ShardsOfDesires = 'shards_of_desires',
  ShatteredBlade = 'shattered_blade',
  SilvermaneBadge = 'silvermane_badge',
  SilvermaneInsignia = 'silvermane_insignia',
  SilvermaneMedal = 'silvermane_medal',
  SproutOfLife = 'sprout_of_life',
  SquirmingCore = 'squirming_core',
  StarfireEssence = 'starfire_essence',
  StellarisSymphony = 'stellaris_symphony',
  TattersOfThought = 'tatters_of_thought',
  ThiefsInstinct = 'thiefs_instinct',
  UsurpersScheme = 'usurpers_scheme',
  WorldbreakerBlade = 'worldbreaker_blade',
}

export enum PathType {
  Knight = 'Knight',
  Mage = 'Mage',
  Memory = 'Memory',
  Priest = 'Priest',
  Rogue = 'Rogue',
  Shaman = 'Shaman',
  Warlock = 'Warlock',
  Warrior = 'Warrior',
}

export interface SuperImposition {
  rank: number;
  params: string[];
}
