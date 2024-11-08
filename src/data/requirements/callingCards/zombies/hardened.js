const bestiary = {

    "Spray & Pray": {
        tiered: false,
        description: "Earn 10 Antiparasitic Medals (Kill 5 Parasites without releasing the trigger)"
    },

    "Hostile Takeover": {
        tiered: false,
        description: "Use Brainrotted Vermin to Kill 10 Vermin"
    },

    "Punching Up": {
        tiered: false,
        description: "Kill 5 Abominations while using Mutant Injection"
    },

    "Rip & Tear": {
        tiered: false,
        description: "Kill 25 Armored Zombies after you've first destroyed their Armor"
    },

    "Freedom!": {
        tiered: false,
        description: "Eliminate an Amalgam after destroying 5 or more of its body parts 3 times"
    },

    "You Dropped This": {
        tiered: false,
        description: "Use a Mangler Cannon to Kill a Mangler 3 times"
    },
}

const kittedOut = {

    "Slow Burn": {
        tiered: true,
        tiers: {
            tier1: "10",
            tier2: "?",
            tier3: "?"
        },
        description: `Kill ${tiers.tier1} Special Zombies with Energy Mine while Insta-Kill is active`
    },

    "Gumption": {
        tiered: false,
        description: "Use 3 Legendary GobbleGums in a single match"
    },

    "Menticide": {
        tiered: false,
        description: "Get 25 Kills with Brain Rotted Elite Zombies while using the Big Game Augment"
    },

    "Hot Swap": {
        tiered: false,
        description: "Without using Elemental Pop, get Kills with 4 different Ammo Mods in a single match"
    },

    "Haunted Collateral": {
        tiered: false,
        description: "Kill 3 different types of Zombies with a single use of Dark Flare"
    },

    "Event Horizon": {
        tiered: true,
        tiers: {
            tier1: "25",
            tier2: "50",
            tier3: "100"
        },
        description: `Get ${tiers.tier1} Melee Kills on Zombies being pulled into the Kazimir Device`
    },
}

const aetherInvestigator = {
    
    "Finders Keepers": {
        tiered: true,
        tiers: {
            tier1: "5",
            tier2: "?",
            tier3: "?"
        },
        description: `Discover ${tiers.tier1} Secret Rewards`
    },

    "Perfectionist": {
        tiered: true,
        tiers: {
            tier1: "5",
            tier2: "10",
            tier3: "?"
        },
        description: `Reach S.A.M Trial Mastery Targets ${tiers.tier1} times`
    },

    "Weaver's Ranger Recon": {
        tiered: false,
        description: "Discover Intel to learn more about Weaver"
    },

    "Grey's Analysis": {
        tiered: false,
        description: "Discover Intel to learn more about Grey"
    },

    "Aguinaldo's Eyes Only": {
        tiered: false,
        description: "Discover Intel to learn more about Aguinaldo"
    },

    "Carver's Covert Action": {
        tiered: false,
        description: "Discover Intel to learn more about Carver"
    },
}
