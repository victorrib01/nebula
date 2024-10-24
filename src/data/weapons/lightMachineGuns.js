import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [{ name: 'PU-21' }, { name: 'XMG' }, { name: 'GPMG-7' }]

export default weapons.map((weapon) => ({
  category: 'Light Machine Guns',
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
