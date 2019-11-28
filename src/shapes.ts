export interface Shape {
  name: string;
}

export class Square implements Shape {
  height: number;
  name: string = "square";

  toString(): string {
    return this.name;
  }
  constructor(h: number) {
    this.height = h;
  }
}

export class Rectangle implements Shape {
  height: number;
  name: string = "rectangle";

  constructor(h: number) {
    this.height = h;
  }
}
