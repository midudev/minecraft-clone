import { nanoid } from 'nanoid'
import create from 'zustand'

export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [{
    id: nanoid(),
    pos: [1, 1, 1],
    texture: 'dirt'
  }, {
    id: nanoid(),
    pos: [1, 5, 1],
    texture: 'log'
  }],
  addCube: (x, y, z) => {
    set(state => ({
      cubes: [...state.cubes, {
        id: nanoid(),
        texture: state.texture,
        pos: [x, y, z]
      }]
    }))
  },
  removeCube: (id) => {
    set(state => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }))
  },
  setTexture: (texture) => {
    set(() => ({ texture }))
  },
  saveWorld: () => {},
  resetWorld: () => {}
}))
