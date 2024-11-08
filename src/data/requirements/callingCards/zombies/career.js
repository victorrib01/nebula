const freshMeat = {
    "Carbonated": {
        tiered: false,
        description: "Have 3 Perks active at the same time"
    },

    "Showtime": {
        tiered: false,
        description: "With 3 Armor Plates equippped, get 50 eliminations"
    },

    "Hide & Seek": {
        tiered: false,
        description: "Get 50 Eliminations using Rare or higher Weapons from the Mystery Box"
    },

    "Up-Gun": {
        tiered: false,
        description: "Get 50 Eliminations with Pack-a-Punched Weapons"
    },

    "Off The Shelf": {
        tiered: false,
        description: "Get 50 Eliminations using Rare or higher Wall Buy Weapons"
    },

    "Gladiator": {
        tiered: false,
        description: "Reach Round 10 in a match and Exfil successfully"
    }
}

const trophyHunter = {
    "Splash Damage": {
        tiered: true,
        tiers: {
            tier1: "5 times",
            tier2: "? times",
            tier3: "? times"
        },
        description: `Get 5 Zombie kills with a single Explosive Weapon shot ${tiers.tier1}`
    },

    "Plunderer": {
        tiered: true,
        tiers: {
            tier1: "5 times",
            tier2: "10 times",
            tier3: "20 times"
        },
        description: `Earn 50,000 Essence in a single match ${tiers.tier1}`
    },

    "Death Sentance": {
        tiered: false,
        description: "Get 30 Kills during the duration of a single Instant Kill Power-Up"
    },

    "Madness": {
        tiered: true,
        tiers: {
            tier1: "25",
            tier2: "50",
            tier3: "100"
        },
        description: `Earn ${tiers.tier1} Alchemist Medals (Kill 5 or more Zombies rapidly that are affected by two or more elements)`
    },

    

    "Outrageous": {
        tiered: false,
        description: "Start the Rampade Inducer in Round 1 and reach Round 15 without disabling it"
    },

    "Mastermind": {
        tiered: false,
        description: "Kill 25 Zombies with a single use of a Trap"
    },
}

const quarantined = {
    "Death Toll": {
        tiered: true,
        tiers: {
            tier1: "?",
            tier2: "?",
            tier3: "?",
            tier4: "?",
            tier5: "10,000"
        },
        description: `Eliminate ${tiers.tier1} Zombies`
    },

    "Skullcrusher": {
        tiered: true,
        tiers: {
            tier1: "?",
            tier2: "?",
            tier3: "2500",
            tier4: "5000",
            tier5: "10,000"
        },
        description: `Get ${tiers.tier1} Critical Kills`
    },

    "Going Rounds": {
        tiered: true,
        tiers: {
            tier1: "100",
            tier2: "200",
            tier3: "300",
            tier4: "400",
            tier5: "500"
        },
        description: `Survive ${tiers.tier} Rounds`
    },

    "Plague Eradicator": {
        tiered: true,
        tiers: {
            tier1: "100",
            tier2: "250",
            tier3: "500",
            tier4: "1000",
            tier5: "2000"
        },
        description: `Get ${tiers.tier1} Zombie Kills while Field Upgrades are active`
    },

    "Pact Weapon": {
        tiered: true,
        tiers: {
            tier1: "500",
            tier2: "1000",
            tier3: "2500",
            tier4: "5000",
            tier5: "10,000"
        },
        description: `Get ${tiers.tier1} Zombie Eliminations with Pack-a-Punched Level III Weapons`
    },

    "Power Killer": {
        tiered: true,
        tiers: {
            tier1: "500",
            tier2: "1000",
            tier3: "2500",
            tier4: "5000",
            tier5: "10,000"
        },
        description: `Get ${tiers.tier1} Zombie Eliminations with Wonder Weapons`
    },
}
