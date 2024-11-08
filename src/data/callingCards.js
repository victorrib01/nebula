
import multiplayer from './callingCards/multiplayer'
import zombies from './callingCards/zombies'
import warzone from './callingCards/warzone'
import campaign from './callingCards/campaign'

import defaultProgress from '@/data/defaults/progress'

const categories = [
  { name: 'Multiplayer', gamemode: multiplayer },
  { name: 'Zombies', gamemode: zombies },
  { name: 'Warzone', gamemode: warzone },
  { name: 'Campaign', gamemode: campaign },
]

export default categories.flatMap(({ name: category, gamemode }) =>
  gamemode.map((name) => ({
    category,
    name,

    progress: {
      ...defaultProgress[name],
    },
  }))
)
