class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  computeArea(): number {
    return this.width * this.height;
  }
}

function newRectangle(width: number, height: number): Shape {
  return new Rectangle(width, height);
}

export { newRectangle };
