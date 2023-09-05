class Circle implements Shape {
  constructor(private radius: number) {}

  computeArea(): number {
    return Math.PI * this.radius * this.radius
  }

}

function newCircle(radius: number) {
  return new Circle(radius)
}

export { newCircle }
