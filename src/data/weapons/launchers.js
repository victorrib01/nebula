import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [{ name: 'CIGMA 2B' }, { name: 'HE-1' }]

export default weapons.map((weapon) => ({
  category: 'Launchers',
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
