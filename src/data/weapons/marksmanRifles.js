import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'SWAT 5.56' },
  { name: 'Tsarkov 7.62' },
  { name: 'AEK-973' },
  { name: 'DM-10' },
]

export default weapons.map((weapon) => ({
  category: 'Marksman Rifles',
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
