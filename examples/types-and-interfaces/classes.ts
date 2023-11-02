class MyClass {

  third: number
  
  public constructor(private readonly first: number, public second: number, third = "0") {
    this.third = Number.parseInt(third);
  }

  // getter
  public get valuesAsString(): string {
    return this.first + ", " + this.second + ", " + this.third;
  }

}

console.log(new MyClass(1, 2, "3").valuesAsString);
