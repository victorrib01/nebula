import defaultProgress from '@/data/defaults/progress'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'XM4' },
  { name: 'AK-74' },
  { name: 'AMES 85' },
  { name: 'GPR 91' },
  { name: 'MODEL L' },
  { name: 'GOBLIN MK 2' },
  { name: 'AS VAL' },
]

export default weapons.map((weapon) => ({
  category: 'Assault Rifles',
  name: weapon.name,

  progress: {
    ...defaultProgress,
  },
}))
