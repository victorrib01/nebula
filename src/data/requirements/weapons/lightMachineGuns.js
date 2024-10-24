import lightMachineGuns from '@/data/weapons/lightMachineGuns'

export default {
  ...lightMachineGuns.reduce((acc, weapon) => {
    acc[weapon.name] = {
      multiplayer: {
        // Military
        'Granite': { amount: 5, type: 'headshots' },
        'Woodland': { amount: 10, type: 'headshots' },
        'Savanna': { amount: 15, type: 'headshots' },
        'Splinter': { amount: 20, type: 'headshots' },
        'Moss': { amount: 30, type: 'headshots' },
        'Shade': { amount: 40, type: 'headshots' },
        'Digital': { amount: 50, type: 'headshots' },
        'Tide': { amount: 75, type: 'headshots' },
        'Red Tiger': { amount: 100, type: 'headshots' },

        // Special
        'Special 1 (TBD)': null,
        'Special 2 (TBD)': null,

        // Mastery
        'Gold': null,
        'Diamond': null,
        'Dark Spine': null,
        'Dark Matter': null,
      },

      zombies: {
        // Military
        'Granite': { amount: 50, type: 'critical_kills' },
        'Woodland': { amount: 100, type: 'critical_kills' },
        'Savanna': { amount: 150, type: 'critical_kills' },
        'Splinter': { amount: 200, type: 'critical_kills' },
        'Moss': { amount: 300, type: 'critical_kills' },
        'Shade': { amount: 400, type: 'critical_kills' },
        'Digital': { amount: 500, type: 'critical_kills' },
        'Tide': { amount: 750, type: 'critical_kills' },
        'Red Tiger': { amount: 1000, type: 'critical_kills' },

        // Special
        'Special 1 (TBD)': null,
        'Special 2 (TBD)': null,

        // Mastery
        'Mystic Gold': null,
        'Opal': null,
        'Afterlife': null,
        'Nebula': null,
      },

      warzone: {
        // Military
        'Granite': { amount: 5, type: 'eliminations' },
        'Woodland': { amount: 10, type: 'eliminations' },
        'Savanna': { amount: 15, type: 'eliminations' },
        'Splinter': { amount: 20, type: 'eliminations' },
        'Moss': { amount: 30, type: 'eliminations' },
        'Shade': { amount: 40, type: 'eliminations' },
        'Digital': { amount: 50, type: 'eliminations' },
        'Tide': { amount: 75, type: 'eliminations' },
        'Red Tiger': { amount: 100, type: 'eliminations' },

        // Special
        'Special 1 (TBD)': null,
        'Special 2 (TBD)': null,

        // Mastery
        'Gold Tiger': null,
        "King's Ransom": null,
        'Catalyst': null,
        'Abyss': null,
      },
    }

    return acc
  }, {}),
}
