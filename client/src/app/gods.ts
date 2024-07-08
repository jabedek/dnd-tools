export abstract class God {
  id?: string;
  originDetails?: GodOriginDetails;
  selfDetails?: GodSelfDetails;
  attributes?: GodAttributes;
  energy: GodEnergy = {
    total: 0,
    current: 0,
  };
  ownDesign?: GodOwnDesign;

  designOffspring() {
    return;
  }

  designCreation() {
    return;
  }
}

export class Dimension {
  kind?: 'Realm' | 'Domain';
}
export class MagicCreature {}
export class MagicArtifact {}

export class PurposeTask {}

export interface SentientGod {
  name?: string;
}

export interface AutomataGod {
  name?: string;
}

export type GodOriginDetails = {
  kind?: 'sentient' | 'automata';
  tier?: 'fundamental' | 'primordial' | 'celestial';
  tierGeneration?: number;
  ancestor?: {
    godId: string;
    godName: string;
  };
};

export type GodSelfDetails = {
  names: string;
  titles: string;
  description: string;
  purpose: string;
  purposeTasks: PurposeTask[];
};

export type GodAttributes = {
  immortality: {
    active: boolean;
    immortalUnlessKilled: boolean;
    canBeKilledBy: 'god';
  };
  canDesign: {
    offspring: boolean;
    creatures: boolean;
    artifacts: boolean;
    dimensions: boolean;
  };
};

export type GodOwnDesign = {
  offspring: God[];
  creations: (MagicCreature | MagicArtifact | Dimension)[];
};

export type GodEnergy = {
  total: number;
  current: number;
};
