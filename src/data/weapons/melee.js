import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [{ name: 'Knife' }, { name: 'Baseball Bat' }]

export default weapons.map((weapon) => ({
  category: 'Melee',
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
