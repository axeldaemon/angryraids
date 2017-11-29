export default {
  heroesByClass: state => {
    return state.heroes.sort((a, b) => (a.classId < b.classId ? -1 : 1))
  },
  heroesById: state => {
    return state.heroes.sort((a, b) => (a.id < b.id ? -1 : 1))
  },
  applyStarAndEnhancement: (state, getters) => (stats, star, enhancement, rarity = 'Legendary') => {
    let starCoefficient = 1

    if(rarity === 'Legendary') {
      for(let stat in stats) {
        if(stats.hasOwnProperty(stat)) {
          if(stat === 'atk' || stat === 'maxHp')
            starCoefficient = state.atkHpScale[star]
          if(stat === 'pDef' || stat === 'mDef')
            starCoefficient = state.defScale[star]

          let base = stats[stat]
          let coefficient = 1 + (enhancement * 0.11)

          stats[stat] = Math.floor(base * coefficient * starCoefficient)
        }
      }
    } else if (rarity === 'Unique') {
      let result = Math.floor(state.uwScale[star] * state.uwEnhanceScale[enhancement])
      stats.atk = Math.floor(result * stats.atk / 1000)
    }

    return stats
  },
  selectedHero: state => state.selectedHero,
  selectedId: state => state.selectedHero.id,
  selectedItemByType: state => (type) => state.selectedItems[type],
  options: state => state.options,
  items: state => {
    let items = []
    // generate sets
    for(let set of state.sets) {
      // legendary sets for now, todo ancient sets

      for(let tier = 3; tier <= 7; tier++) {
        // weapon

        // knight
        items.push({
          name: `${set.prefix} Lance`,
          stats: {
            atk: state.wepKnightTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [1]
        })
        // warrior
        items.push({
          name: `${set.prefix} Greatsword`,
          stats: {
            atk: state.wepWarriorTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [2]
        })
        // assassin
        items.push({
          name: `${set.prefix} Dagger`,
          stats: {
            atk: state.wepAssassinTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [3]
        })
        // archer
        items.push({
          name: `${set.prefix} Bow`,
          stats: {
            atk: state.wepArcherTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [4]
        })
        // mechanic
        items.push({
          name: `${set.prefix} Gun`,
          stats: {
            atk: state.wepMechanicTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [6]
        })
        // wizard, priest
        items.push({
          name: `${set.prefix} Staff`,
          stats: {
            atk: state.wepStaffTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [5, 7]
        })

        // primary armors

        // archer, mechanic, assassin
        items.push({
          name: `${set.prefix} Scale Armor`,
          stats: {
            pDef: state.armorScaleTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Armor",
          classes: [3, 4, 6]
        })
        // priest, wizard
        items.push({
          name: `${set.prefix} Robe`,
          stats: {
            pDef: state.armorRobeTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Armor",
          classes: [5, 7]
        })
        // warrior, knight
        items.push({
          name: `${set.prefix} Plate Armor`,
          stats: {
            pDef: state.armorPlateTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Armor",
          classes: [1, 2]
        })

        // secondary armors

        // archer, mechanic, assassin
        items.push({
          name: `${set.prefix} Leather Cape`,
          stats: {
            mDef: state.secondaryCapeTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Secondary Armor",
          classes: [3, 4, 6]
        })
        // priest, wizard
        items.push({
          name: `${set.prefix} Hat`,
          stats: {
            mDef: state.secondaryHatTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Secondary Armor",
          classes: [5, 7]
        })
        // warrior, knight
        items.push({
          name: `${set.prefix} Shield`,
          stats: {
            mDef: state.secondaryShieldTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Secondary Armor",
          classes: [1, 2]
        })

        // accessory

        // bracelet
        items.push({
          name: `${set.prefix} Bracelet`,
          stats: {
            pDef: state.braceletTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Accessory",
          classes: [1, 2, 3, 4, 5, 6, 7]
        })
        // earring
        items.push({
          name: `${set.prefix} Earring`,
          stats: {
            atk: state.earringTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Accessory",
          classes: [1, 2, 3, 4, 5, 6, 7]
        })
        // necklace
        items.push({
          name: `${set.prefix} Necklace`,
          stats: {
            mDef: state.necklaceTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Accessory",
          classes: [1, 2, 3, 4, 5, 6, 7]
        })
        // ring
        items.push({
          name: `${set.prefix} Ring`,
          stats: {
            maxHp: state.ringTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Accessory",
          classes: [1, 2, 3, 4, 5, 6, 7]
        })
        // orb
        if(tier >= 5) {
          items.push({
            name: `${set.prefix} Orb`,
            stats: {
              maxHp: state.orbTierBase[tier]
            },
            tier: tier,
            rarity: "Legendary",
            type: "Orb",
            classes: [1, 2, 3, 4, 5, 6, 7]
          })
        }
      }
    }

    items.forEach(item => {
      item.enhancement = 0
      item.stars = 0
      item.options = [
        state.options[0],
        state.options[1],
        state.options[2],
        state.options[3]
      ]
    })

    return items
  },
  stats: (state, getters) => {
    // todo calculate equipment runes and etc
    let mergeStats = (stat1, stat2) => {
      if(stat2 === undefined) return stat1
      for(let p in stat1) {
        if(stat1.hasOwnProperty(p) && stat2.hasOwnProperty(p)) {
          stat1[p] = stat1[p] + stat2[p]
        }
      }
      return stat1
    }

    // the ugly cloning ughh if only Object.assign didn't copy reactive properties
    let statValues = JSON.parse(JSON.stringify(state.statValues))
    let selectedItems = JSON.parse(JSON.stringify(state.selectedItems))

    // apply stats
    for(let itemType in selectedItems) {
      if(selectedItems.hasOwnProperty(itemType)) {
        let item = selectedItems[itemType]
        if(item.hasOwnProperty('name')) {
          // apply enhancement and star rating
          let appliedStats = getters.applyStarAndEnhancement(item.stats, item.stars, item.enhancement, item.rarity)
          // merge base stats
          statValues = mergeStats(statValues, appliedStats)
          // merge option stats
          for(let itemOption of item.options) {
            if(itemOption.hasOwnProperty('stats')) {
              statValues = mergeStats(statValues, itemOption.stats)
            }
          }
        }

      }
    }

    // apply stat modifiers
    for(let itemType in selectedItems) {
      if(selectedItems.hasOwnProperty(itemType)) {
        let item = selectedItems[itemType]
        if(item.hasOwnProperty('name')) {
          // apply modifiers
          for(let itemOption of item.options) {
            if(itemOption.hasOwnProperty('modifiers')) {
              for(let p in itemOption.modifiers) {
                if(itemOption.modifiers.hasOwnProperty(p)) {
                  statValues[p] = statValues[p] * itemOption.modifiers[p]
                }
              }
            }
          }
        }

      }
    }

    return {
      basicStats: [
        { type: 'MAX HP', value: Math.floor(statValues.maxHp), base: state.selectedClass.stats.maxHp },
        { type: 'ATK', value: Math.floor(statValues.atk), base: state.selectedClass.stats.atk },
        { type: 'P.DEF', value: Math.floor(statValues.pDef), base: state.selectedClass.stats.pDef },
        { type: 'M.DEF', value: Math.floor(statValues.mDef), base: state.selectedClass.stats.mDef }
      ],
      additionalOptions: [
        { type: 'Crit', value: statValues.critChance, base: state.selectedClass.stats.critChance },
        { type: 'Crit DMG', value: statValues.critDamage, base: state.selectedClass.stats.critDamage },
        { type: 'Penetration', value: statValues.penetration, base: state.selectedClass.stats.penetration },
        { type: 'ACC', value: statValues.accuracy, base: state.selectedClass.stats.accuracy },
        { type: 'P.Dodge', value: statValues.pDodge, base: state.selectedClass.stats.pDodge },
        { type: 'M.Dodge', value: statValues.mDodge, base: state.selectedClass.stats.mDodge },
        { type: 'P.Block', value: statValues.pBlock, base: state.selectedClass.stats.pBlock },
        { type: 'M.Block', value: statValues.mBlock, base: state.selectedClass.stats.mBlock },
        { type: 'P.Block DEF', value: statValues.pBlockDef, base: state.selectedClass.stats.pBlockDef },
        { type: 'M.Block DEF', value: statValues.mBlockDef, base: state.selectedClass.stats.mBlockDef },
        { type: 'P.Tough', value: statValues.pTough, base: state.selectedClass.stats.pTough },
        { type: 'M.Tough', value: statValues.mTough, base: state.selectedClass.stats.mTough },
        { type: 'P.Crit Resist', value: statValues.pCritResist, base: state.selectedClass.stats.pCritResist },
        { type: 'M.Crit Resist', value: statValues.mCritResist, base: state.selectedClass.stats.mCritResist },
        { type: 'CC Resist', value: statValues.ccResist, base: state.selectedClass.stats.ccResist },
        { type: 'Lifesteal', value: statValues.lifesteal, base: state.selectedClass.stats.lifesteal },
        { type: 'ATK Spd', value: statValues.atkSpd, base: state.selectedClass.stats.atkSpd },
        { type: 'MP Recovery/Attack', value: statValues.manaAtk, base: state.selectedHero.manaAtk },
      ]
    }
  }
}
