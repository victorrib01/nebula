import { defineStore } from 'pinia'
import { notify } from '@kyvg/vue3-notification'
import defaultWeapons from '@/data/weapons'
import defaultFilters from '@/data/defaults/filters'
import defaultCallingCards from '@/data/defaults/calling_cards'
import defaultPreferences from '@/data/defaults/preferences'
import weaponRequirements from '@/data/requirements/weapons'
import camouflageNameChanges from '@/data/camouflageNameChanges'
import camouflageOrder from '@/data/camouflageOrder'

const token = import.meta.env.MODE === 'production' ? 'nebula' : 'nebula-dev'

export const useStore = defineStore({
  id: 'store',

  state: () => ({
    beganGrind: null,
    favorites: {
      weapons: [],
      callingCards: [],
      zombies: [],
      warzone: [],
    },
    filters: {},
    weaponRequirements: { ...weaponRequirements },
    weapons: [],
    callingCards: {},
    preferences: { ...defaultPreferences },
  }),

  getters: {
    isFavorite: (state) => (type, name) => state.favorites[type]?.includes(name) || false,
    getFavorites: (state) => (type) => state.favorites[type],
    weaponCategories: (state) =>
      Array.from(new Set(state.weapons.map((weapon) => weapon.category))),
    callingCardCompleted: (state) => (card) => state.callingCards[card],
  },

  actions: {
    setWeapons(weapons) {
      this.weapons = JSON.parse(JSON.stringify(defaultWeapons))

      if (weapons) {
        weapons.forEach((weapon) => {
          const index = this.weapons.findIndex((w) => w.name === weapon.name)

          if (index !== -1) {
            // Set progress for each type
            ;['multiplayer', 'zombies', 'warzone'].forEach((type) => {
              Object.keys(weapon.progress[type]).forEach((camouflage) => {
                // Handle changes to camouflage names
                if (camouflage in camouflageNameChanges && weapon.progress[type][camouflage]) {
                  this.weapons[index].progress[type][camouflageNameChanges[camouflage]] = true
                } else if (camouflage in this.weapons[index].progress[type]) {
                  this.weapons[index].progress[type][camouflage] = weapon.progress[type][camouflage]
                }
              })
            })
          }
        })
      }
    },

    setCallingCards(callingCards) {
      this.callingCards = JSON.parse(JSON.stringify(defaultCallingCards))

      if (callingCards) {
        Object.keys(callingCards).forEach((card) => {
          if (card in this.callingCards) {
            this.callingCards[card] = callingCards[card]
          }
        })
      }
    },

    setFavorites(favorites) {
      Object.keys(favorites).forEach((key) => {
        if (key in this.favorites) {
          this.favorites[key] = favorites[key]
        }
      })
    },

    setFilters(filters) {
      this.filters = JSON.parse(JSON.stringify(defaultFilters))

      if (filters) {
        Object.keys(filters).forEach((key) => {
          if (key in defaultFilters) {
            this.filters[key] = filters[key]
          }
        })
      }
    },

    setPreferences(preferences) {
      this.preferences = JSON.parse(JSON.stringify(defaultPreferences))

      if (preferences) {
        Object.keys(preferences).forEach((key) => {
          if (key in defaultPreferences) {
            this.preferences[key] = preferences[key]
          }
        })
      }
    },

    getStoredProgress() {
      const storage = localStorage.getItem(token)

      if (!storage) {
        this.setWeapons()
        this.setCallingCards()
        this.setFilters()
        return
      }

      const { weapons, callingCards, filters, beganGrind, favorites, preferences } =
        JSON.parse(storage)

      if (weapons) this.setWeapons(weapons)
      if (callingCards) this.setCallingCards(callingCards)
      if (filters) this.setFilters(filters)
      if (beganGrind) this.beganGrind = beganGrind
      if (favorites) this.setFavorites(favorites)
      if (preferences) this.setPreferences(preferences)
    },

    storeProgress() {
      if (this.beganGrind === null) this.beganGrind = new Date()

      localStorage.setItem(
        token,
        JSON.stringify({
          weapons: this.weapons,
          callingCards: this.callingCards,
          filters: this.filters,
          beganGrind: this.beganGrind,
          favorites: this.favorites,
          preferences: this.preferences,
        })
      )
    },

    resetProgress() {
      localStorage.removeItem(token)
      this.setWeapons()
      this.setCallingCards()
      this.beganGrind = null

      notify({
        type: 'success',
        title: 'Progress successfully reset!',
      })
    },

    toggleFavorite({ type, name }) {
      const index = this.favorites[type].findIndex((favorite) => favorite === name)

      if (index === -1) {
        this.favorites[type].push(name)
      } else {
        this.favorites[type].splice(index, 1)
      }

      this.storeProgress()
    },

    unfavoriteAll(type) {
      this.favorites[type] = []
      this.storeProgress()
    },

    toggleCamouflageCompleted(weaponName, camouflage, current, progressKey) {
      this.weapons.find((w) => w.name === weaponName).progress[progressKey][camouflage] = !current

      if (!current) {
        this.togglePreviousCamouflagesCompleted(weaponName, camouflage, current, progressKey)
      } else {
        this.resetNextCamouflages(weaponName, camouflage, progressKey)
      }

      this.storeProgress()
    },

    togglePreviousCamouflagesCompleted(weaponName, camouflage, current, progressKey) {
      const selectedWeapon = this.weapons.find((w) => w.name === weaponName)
      const sortedCamouflages = Object.keys(selectedWeapon.progress[progressKey]).sort(
        (a, b) => camouflageOrder.indexOf(a) - camouflageOrder.indexOf(b)
      )
      const camouflageIndex = sortedCamouflages.findIndex((c) => c === camouflage)
      const previousCamouflages = sortedCamouflages.slice(0, camouflageIndex)

      let ignore_index = null;
      
      if (camouflageIndex === 10) {
        ignore_index = 9;
      }

      previousCamouflages.forEach((camo) => {
        if (ignore_index === null ? true : camo !== sortedCamouflages[ignore_index]) {
          selectedWeapon.progress[progressKey][camo] = !current
        }
      })

      this.storeProgress()
    },

    resetNextCamouflages(weaponName, camouflage, progressKey) {
      const selectedWeapon = this.weapons.find((w) => w.name === weaponName)
      const sortedCamouflages = Object.keys(selectedWeapon.progress[progressKey]).sort(
        (a, b) => camouflageOrder.indexOf(a) - camouflageOrder.indexOf(b)
      )
      const camouflageIndex = sortedCamouflages.findIndex((c) => c === camouflage)
      const nextCamouflages = sortedCamouflages.slice(camouflageIndex + 1)

      let ignore_index = null;
      
      if (camouflageIndex === 9) {
        ignore_index = 10;
      }

      nextCamouflages.forEach((camo) => {
        if (ignore_index === null ? true : camo !== sortedCamouflages[ignore_index]) {
          selectedWeapon.progress[progressKey][camo] = false
        }
      })

      this.storeProgress()
    },

    toggleWeaponCompleted(weapon, current, progressKey) {
      const selectedWeapon = this.weapons.find((w) => w.name === weapon.name)
      Object.keys(selectedWeapon.progress[progressKey]).forEach(
        (camouflage) => (selectedWeapon.progress[progressKey][camouflage] = !current)
      )

      this.storeProgress()
    },

    toggleCategoryCompleted(category, progressKey) {
      const categoryWeapons = this.weapons.filter((weapon) => weapon.category === category)
      const categoryCompleted = categoryWeapons.every((weapon) =>
        Object.values(weapon.progress[progressKey]).every(Boolean)
      )

      categoryWeapons.forEach((weapon) => {
        Object.keys(weapon.progress[progressKey]).forEach((camouflage) => {
          weapon.progress[progressKey][camouflage] = !categoryCompleted
        })
      })

      this.storeProgress()
    },

    toggleCallingCardCompleted(card, current) {
      this.callingCards[card.name] = !current
      this.storeProgress()
    },
  },
})
