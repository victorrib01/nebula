import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [{ name: 'LW3A1 Frostline' }, { name: 'SVD' }, { name: 'LR 7.62' }]

export default weapons.map((weapon) => ({
  category: 'Sniper Rifles',
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
