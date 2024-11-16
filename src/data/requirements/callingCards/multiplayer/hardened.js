import hardened from '@data/callingCards/multiplayer/hardened'

const killer = {
    "Double Killer": {
        tiered: true,
        tiers: {
            tier1: "10",
            tier2: "25",
            tier3: "50"
        },
        description: `Earn ${tiers.tier1} Double Kill Medals (2 rapid Kills)`
    },

    "Triple Killer": {
        tiered: true,
        tiers: {
            tier1: "5",
            tier2: "10",
            tier3: "25"
        },
        description: `Earn ${tiers.tier1} Triple Kill Medals (3 rapid Kills)`
    },

    "Fury Killer": {
        tiered: false,
        description: 'Earn a Fury Kill Medal (4 rapid Kills) 1 time.'
    },

    "Bloodthirsty Killer": {
        tiered: true,
        tiers: {
            tier1: "10 times",
            tier2: "25 times",
            tier3: "50 times"
        },
        description: `Get 5 kills without dying ${tiers.tier1}`
    },

    "Merciless Killer": {
        tiered: true,
        tiers: {
            tier1: "1 time",
            tier2: "? times",
            tier3: "? times"
        },
        description: `Get 10 kills without dying ${tiers.tier1}`
    },

    "Ruthless Killer": {
        tiered: false,
        description: 'Get 15 kills without dying'
    }
}

const humiliation = {
    "Behind Enemy Lines": {
        tiered: true,
        tiers: {
            tier1: "1 time",
            tier2: "? time",
            tier3: "? time"
        },
        description: `Perform a Finishing Move while disguised by the Sleeper Agent Field Upgrade ${tiers.tier1}`
    },

    "Tick Tock Boom": {
        tiered: true,
        tiers: {
            tier1: "10",
            tier2: "25",
            tier3: "50"
        },
        description: `Get ${tiers.tier1} Kills with a stuck Semtex`
    },

    "You Have My Attention": {
        tiered: true,
        tiers: {
            tier1: "5",
            tier2: "10",
            tier3: "25"
        },
        description: `Earn ${tiers.tier1} Turned On Medals (Killed an enemy who shot you first from outside your view)`
    },

    "Captive Audience": {
        tiered: true,
        tiers: {
            tier1: "1 time",
            tier2: "? times",
            tier3: "? times"
        },
        description: `Get a Kill while using an enemy as a Body Shield ${tiers.tier1}`
    },

    "From The Grave": {
        tiered: true,
        tiers: {
            tier1: "5",
            tier2: "10",
            tier3: "25"
        },
        description: `Earn ${tiers.tier1} Afterlife Medals (Killed an enemy after you died)`
    },

    "Bullseye": {
        tiered: true,
        tiers: {
            tier1: "25",
            tier2: "50",
            tier3: "100"
        },
        description: `Get ${tiers.tier1} kills with the Combat Axe`
    },
}

const goingHam = {
    "Four Piece Dinner": {
        tiered: false,
        description: 'Earn a Quad Feed Medal (4 uninterruped Kills in the Kill Feed)'
    },

    "Hot Swap": {
        tiered: false,
        description: 'Use 2 or more different weapons to earn a Triple Kill (3 rapid Kills) or better 5 times'
    },

    "Bang For The Buck": {
        tiered: false,
        description: 'Get 2 kills with a single piece of Lethal Equipment 10 times'
    },

    "Redemption Arc": {
        tiered: false,
        description: 'Kil an enemy while in Last Stand from the Morphine Injector, then get another Kill shortly after 5 times'
    },

    "Onslaught": {
        tiered: false,
        description: 'Earn a Double Kill Medal (2 rapid Kills) or better against Attackers or Defenders in Objective games 20 times'
    },

    "Overwhelming Force": {
        tiered: false,
        description: 'Earn 5 Going Hard Medals (Killed 4 or more enemies with a single player-controlled Scorestreak'
    },
}

