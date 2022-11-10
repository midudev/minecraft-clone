import {
  grassImg,
  dirtImg,
  logImg,
  glassImg,
  woodImg
} from './images.js'

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)

const groundTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

groundTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter

export {
  groundTexture,
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
}
