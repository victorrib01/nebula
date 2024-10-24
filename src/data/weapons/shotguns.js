import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [{ name: 'Marine SP' }, { name: 'ASG-89' }]

export default weapons.map((weapon) => ({
  category: 'Shotguns',
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
