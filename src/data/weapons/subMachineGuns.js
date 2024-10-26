import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'C9' },
  { name: 'KSV' },
  { name: 'Tanto .22' },
  { name: 'PP-919' },
  { name: 'Jackal PDW' },
  { name: 'Kompakt 92' },
]

export default weapons.map((weapon) => ({
  category: 'Sub Machine Guns',
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
