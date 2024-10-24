import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: '9mm PM' },
  { name: 'Grekhova' },
  { name: 'GS45' },
  { name: 'Stryder .22' },
]

export default weapons.map((weapon) => ({
  category: 'Handguns',
  comingSoon: weapon.comingSoon || false,
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
