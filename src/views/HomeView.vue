<template>
  <div class="container">
    <div class="filter-container">
      <FiltersComponent :options="filterOptions" :show-info="true" />
      <div class="toggles">
        <FavoritesToggleComponent />
        <LayoutToggleComponent />
      </div>
    </div>

    <WeaponsComponent :weapons="filteredWeapons" :favorites="favorites" />

    <!-- <ProgressComponent
      :progress="darkMatterProgress"
      :label="$t('pages.weapons.progress.label')"
      :tooltip="$t('pages.weapons.progress.tooltip')">
      <template #modal-header>{{ $t('pages.weapons.completed_modal.title') }}</template>
      <template #modal-body>
        <i18n-t keypath="pages.weapons.completed_modal.body" tag="p" scope="global">
          <template #duration>
            <b>{{ daysSinceStart }} {{ $tc('general.days_ago', daysSinceStart) }}</b>
          </template>

          <template #date>
            <b>{{ new Date(getBeganGrind).toLocaleDateString('en-US') }}</b>
          </template>
        </i18n-t>

        <i18n-t
          keypath="pages.mastery.completed_modal.support"
          tag="p"
          style="margin-top: 15px; font-size: 14px; color: #aaa"
          scope="global">
          <a href="https://www.buymeacoffee.com/emilcarlsson" target="_blank">
            {{ $t('pages.mastery.completed_modal.support_link') }}
          </a>
        </i18n-t>
      </template>
    </ProgressComponent> -->
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'
import { groupBy, daysBetweenDates, roundToTwoDecimals } from '@/utils/utils'

import FiltersComponent from '@/components/FiltersComponent.vue'
import WeaponsComponent from '@/components/WeaponsComponent.vue'
import ProgressComponent from '@/components/ProgressComponent.vue'
import LayoutToggleComponent from '@/components/LayoutToggleComponent.vue'
import FavoritesToggleComponent from '@/components/FavoritesToggleComponent.vue'

export default {
  components: {
    FiltersComponent,
    WeaponsComponent,
    ProgressComponent,
    LayoutToggleComponent,
    FavoritesToggleComponent,
  },

  data() {
    return {
      store: useStore(),
    }
  },

  computed: {
    ...mapState(useStore, ['weapons', 'filters', 'weaponCategories', 'beganGrind']),

    getBeganGrind() {
      return this.beganGrind ?? new Date()
    },

    daysSinceStart() {
      const days = daysBetweenDates(this.getBeganGrind, new Date())
      return days ? days : 1
    },

    filterOptions() {
      return [
        {
          label: this.$tc('general.category'),
          key: 'weaponCategory',
          type: 'select',
          options: this.weaponCategories,
        },
      ]
    },

    filteredWeapons() {
      let filteredWeapons = this.weapons
      const { weaponCategory } = this.filters

      if (weaponCategory && weaponCategory !== 'null') {
        filteredWeapons = filteredWeapons.filter((weapon) => weapon.category === weaponCategory)
      }

      return groupBy(filteredWeapons, (weapon) => weapon.category)
    },

    favorites() {
      if (!this.store) return []
      const favorites = this.store.getFavorites('weapons')
      return this.weapons.filter((weapon) => favorites.includes(weapon.name))
    },

    darkMatterProgress() {
      return this.calculateProgress(this.weapons)
    },
  },

  methods: {
    calculateProgress(weapons) {
      const requiredWeapons = 33

      // Sort and filter out the weapons with the most progress
      const mostProgressedWeapons = weapons
        .map((weapon) => {
          let totalCamouflages = Object.keys(weapon.progress).length
          let completedCamouflages = Object.values(weapon.progress).reduce((a, b) => a + b, 0)

          return {
            ...weapon,
            completed: Object.values(weapon.progress).reduce((a, b) => a + b, 0),
            completedPercentage: completedCamouflages / totalCamouflages,
          }
        })
        .sort((a, b) => b.completedPercentage - a.completedPercentage)
        .splice(0, requiredWeapons)

      // Count the amount of camouflages completed for the most progress weapons
      const totalCamouflagesCompleted = mostProgressedWeapons.reduce((a, b) => a + b.completed, 0)

      // Count the required amount of camouflages to complete the Dark Matter camouflage
      const requiredCamouflages = mostProgressedWeapons.reduce((a, b) => {
        return a + Object.keys(b.progress).length
      }, 0)

      return roundToTwoDecimals((totalCamouflagesCompleted / requiredCamouflages) * 100)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

h1 {
  margin-top: 75px;
}

h2 {
  margin: 30px auto 0;
  max-width: 450px;
}

.filter-container {
  align-items: center;
  display: flex;
  width: 100%;

  @media (max-width: $tablet) {
    flex-direction: column;

    :deep(.filters-component) {
      margin-bottom: 20px;
      margin-right: 0;
      width: 100%;
    }

    .toggles {
      display: flex;
      justify-content: space-between;
      width: 100%;

      > :first-child {
        margin-right: 20px;
      }
    }
  }
}

:deep(.filters-component) {
  flex-grow: 1;
  margin-right: 15px;
}
</style>
