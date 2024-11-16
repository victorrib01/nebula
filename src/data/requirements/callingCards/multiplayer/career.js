import career from '@data/callingCards/multiplayer/career'

const bootCamp = {
    "Action Hero": {
        tiered: false,
        description: "Get 10 kills while or shortly after diving sideways or backwards"
    },
    
    "Slipshot": {
        tiered: false,
        description: "Get 10 kills while sliding sideways or backwards"
    },

    "Pocket Knife": {
        tiered: false,
        description: "Get 25 kills with melee weapons"
    },

    "Stalking Prey": {
        tiered: false,
        description: "Get 25 kills while crouched or prone"
    },
    
    "Communications Major": {
        tiered: false,
        description: "Ping an enemy who is then killed shortly after 15 times"
    },

    "Guerilla Warfare": {
        tiered: false,
        description: "Get 10 kills using enemys weapons that you've picked up off the ground"
    }
}

const eliteOperator = {
    "Top Dog": {
        tiered: true,
        tiers: {
            tier1: "1 time",
            tier2: "10 times",
            tier3: "??? times"
        },
        description: `Win a match with the highest score of all players ${tiers.tier1}`
    },

    "Superior": {
        tiered: true,
        tiers: {
            tier1: "8 times",
            tier2: "25 times",
            tier3: "??? times"
        },
        description: `Finish Top 3 in matches with 8 or more players ${tiers.tier1}`
    },

    "Infiltrator": {
        tiered: true,
        tiers: {
            tier1: "1 time",
            tier2: "5 times",
            tier3: "10 times"
        },
        description: `Earn a Coast Cleared Medal (cleared the enemy Objective zone of 2 or more Defenders and then captured it) ${tiers.tier1}`
    },

    "Clean House": {
        tiered: false,
        description: "Kill every enemy at least once in the same life 5 times (minimum of 4 enemies)"
    },

    "Superstar": {
        tiered: false,
        description: "Win a Team Deathmatch, Free for All, or Search & Destroy match with the most Eliminations and highest Elim/Death ratio of all players"
    },

    "Movie Star": {
        tiered: true,
        tiers: {
            tier1: "1 time",
            tier2: "5 times",
            tier3: "10 times"
        },
        description: `Get featured in the Best Play ${tiers.tier1}`
    }
}

const grizzledVeteran = {
    "Eliminations Collector": {
        tiered: true,
        tiers: {
            tier1: "500",
            tier2: "1000",
            tier3: "???",
            tier4: "???",
            tier5: "???"
        },
        description: `Get ${tiers.tier1} eliminations`
    },

    "Headshot Collector": {
        tiered: true,
        tiers: {
            tier1: "50",
            tier2: "100",
            tier3: "250",
            tier4: "500",
            tier5: "1000"
        },
        description: `Get ${tiers.tier1} headshots`
    },

    "Winner": {
        tiered: true,
        tiers: {
            tier1: "10",
            tier2: "25",
            tier3: "50",
            tier4: "??",
            tier5: "??"
        },
        description: `Win ${tiers.tier1} matches`
    },

    "Aggression": {
        tiered: true,
        tiers: {
            tier1: "25",
            tier2: "50",
            tier3: "125",
            tier4: "???",
            tier5: "???"
        },
        description: `Earn ${tiers.tier1} Assault Medals (killed an enemy who is defending their Objective)`
    },

    "Racked Up": {
        tiered: true,
        tiers: {
            tier1: "50,000",
            tier2: "100,000",
            tier3: "250,000",
            tier4: "500,000",
            tier5: "1,000,000"
        },
        description: `Earn ${tiers.tier1} Score`
    },

    "Dialed In": {
        tiered: true,
        tiers: {
            tier1: "25",
            tier2: "???",
            tier3: "???",
            tier4: "???",
            tier5: "???"
        },
        description: `Get ${tiers.tier1} Scorestreak Kills`
    }
}