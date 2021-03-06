import heroes from '../heroes.json'
import classes from '../classes.json'
import sets from '../sets.json'
import options from '../options.json'
import runes from '../runes.json'
import enchants from '../enchants.json'
import nonSetItems from '../nonSetItems.json'

export default {
  heroes: heroes,
  classes: classes,
  sets: sets,
  options: options,
  runes: runes,
  enchants: enchants,
  nonSetItems: nonSetItems,
  uwEnhanceScale: [
    950,
    1000,
    1047,
    1096,
    1148,
    1203,
    1259,
    1319,
    1381,
    1447,
    1515,
    1587,
    1662,
    1741,
    1823,
    1909,
    2000,
    2094,
    2193,
    2297,
    2406,
    3228,
    3381,
    3541,
    3799,
    3978,
    4166,
    4467,
    4679,
    4900,
    5251,
    6624,
    6938,
    7266,
    7753,
    8120,
    8504,
    9071,
    9500,
    9949,
    10610,
    12897,
    13507,
    14146,
    15043,
    15754,
    16500,
    17542,
    18371,
    19240,
    20451,
    24253,
    25400,
    26601,
    28221,
    29556,
    30954,
    32833,
    34386,
    36013,
    38193,
    41529,
    42499,
    43493,
    45033,
    46086,
    47163,
    48827,
    49968,
    51136,
    52933,
    57371,
    59468,
    61631,
    63864,
    66167,
    68542,
    70993,
    73521,
    76128,
    78817,
    80653,
    82520,
    84421,
    86354,
    88321,
    90322,
    92357,
    94428,
    96534,
    98677
  ],
  version: '0.3.0',
  uwScale: [1, 1.1, 1.3, 1.6, 2, 2.5],
  atkHpScale: [1, 1.1, 1.2, 1.3, 1.4, 1.5],
  defScale: [1, 1.1, 1.25, 1.45, 1.7, 2],
  enchantScrollOptions: '',
  wepKnightTierBase: [0, 0, 0, 862, 1663, 3102, 4299, 6400, 7994],
  wepWarriorTierBase: [0, 0, 0, 979, 1883, 3517, 4870, 7255, 9081],
  wepAssassinTierBase: [0, 0, 0, 1073, 2068, 3860, 5349, 7962, 9969],
  wepArcherTierBase: [0, 0, 0, 1211, 2334, 4355, 6037, 8987, 11252],
  wepMechanicTierBase: [0, 0, 0, 1105, 2128, 3973, 5506, 8200, 10266],
  wepStaffTierBase: [0, 0, 0, 1126, 2170, 4050, 5613, 8356, 10462],
  armorPlateTierBase: [0, 0, 0, 576, 1107, 2062, 2859, 4258, 5329],
  armorScaleTierBase: [0, 0, 0, 384, 736, 1377, 1906, 2841, 3553],
  armorRobeTierBase: [0, 0, 0, 192, 370, 690, 954, 1421, 1777],
  secondaryShieldTierBase: [0, 0, 0, 576, 1107, 2062, 2859, 4258, 5329],
  secondaryCapeTierBase: [0, 0, 0, 192, 370, 690, 954, 1421, 1777],
  secondaryHatTierBase: [0, 0, 0, 384, 736, 1377, 1906, 2841, 3553],
  braceletTierBase: [0, 0, 0, 384, 736, 1377, 1993, 2841, 3553],
  earringTierBase: [0, 0, 0, 532, 1025, 1910, 2769, 3943, 4938],
  necklaceTierBase: [0, 0, 0, 384, 736, 1377, 1993, 2841, 3553],
  ringTierBase: [0, 0, 0, 24404, 47039, 87848, 127282, 181282, 226962],
  orbTierBase: [0, 0, 0, 0, 0, 86454, 138285, 190116, 226962],
  treasureTierBase: [0, 0, 0, 0, 0, 0, 0, 190116, 226962],
  statValues: {
    atk: 0,
    pDef: 0,
    mDef: 0,
    maxHp: 0,
    critChance: 0,
    critDamage: 0,
    penetration: 0,
    accuracy: 0,
    ccAccuracy: 0,
    pDodge: 0,
    mDodge: 0,
    pBlock: 0,
    mBlock: 0,
    pBlockDef: 0,
    mBlockDef: 0,
    pWeak: 0,
    mWeak: 0,
    pCritResist: 0,
    mCritResist: 0,
    pTough: 0,
    mTough: 0,
    heal: 0,
    recovery: 0,
    ccResist: 0,
    debuffResist: 0,
    lifesteal: 0,
    atkSpd: 0,
    manaAtk: 0,
    manaDmg: 0,
    manaSec: 0,
    debuffAccuracy: 0
  },
  selectedHero: {
    name: 'Demia',
    title: 'Fortress of Steel',
    damageType: 'Physical',
    manaAtk: 0,
    uniqueBaseAtk: 355,
    uniqueWeapon: 'The Blue Light, Arpheus',
    classId: 1,
    id: 2
  },
  selectedClass: {
    "name": "Knight",
    "imgFolder": "knights",
    "id": 1,
    "stats": {
      "atk": 17632,
      "pDef": 7832,
      "mDef": 6096,
      "maxHp": 1520472,
      "critChance": 50,
      "critDamage": 0,
      "penetration": 0,
      "accuracy": 0,
      "pDodge": 0,
      "mDodge": 0,
      "pBlock": 100,
      "mBlock": 100,
      "pBlockDef": 0,
      "mBlockDef": 0,
      "pWeak": 0,
      "mWeak": 0,
      "pCritResist": 0,
      "mCritResist": 0,
      "pTough": 250,
      "mTough": 250,
      "heal": 0,
      "recovery": 0,
      "ccAccuracy": 0,
      "ccResist": 0,
      "debuffResist": 0,
      "lifesteal": 0,
      "atkSpd": 1000,
      "debuffAccuracy": 0
    }
  },
  selectedItems: {
    'Weapon': {},
    'Armor': {},
    'Secondary Armor': {},
    'Accessory': {},
    'Orb': {},
    'Treasure': {}
  },
  searchHeroName: ''
}
