import { Shape } from './shape'

class Circle implements Shape {
  constructor (private readonly radius: number) {}

  computeArea (): number {
    return Math.PI * this.radius * this.radius
  }
}

function newCircle (radius: number): Shape {
  return new Circle(radius)
}

export { newCircle }
