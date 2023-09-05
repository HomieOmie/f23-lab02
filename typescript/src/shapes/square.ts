import { Shape } from './shape'

class Square implements Shape {
  constructor (private readonly sideLen: number) {}

  computeArea (): number {
    return this.sideLen * this.sideLen
  }
}

function newSquare (sideLen: number): Shape {
  return new Square(sideLen)
}

export { newSquare }
