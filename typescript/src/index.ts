import { newRenderer } from './renderer.js'
import { newRectangle } from './shapes/rectangle.js'

const rectangle: Shape = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw()
