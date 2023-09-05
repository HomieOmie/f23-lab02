class Square implements Shape {
  constructor(private sideLen: number) {}

  computeArea(): number {
      return this.sideLen * this.sideLen
  }
}

function newSquare(sideLen: number) {
  return new Square(sideLen)
}

export { newSquare }
