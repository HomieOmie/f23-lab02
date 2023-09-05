import { Shape } from './shape'

class Rectangle implements Shape {
  constructor (private readonly width: number, private readonly height: number) {}

  computeArea (): number {
    return this.width * this.height
  }
}

function newRectangle (width: number, height: number): Shape {
  return new Rectangle(width, height)
}

export { newRectangle }
