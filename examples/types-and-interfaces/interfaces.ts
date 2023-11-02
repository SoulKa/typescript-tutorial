declare interface User {
  name: string;
}

declare interface UserWithAge extends User {
  age: number;

  isAdult(): boolean;
}

class UserImpl implements User, UserWithAge {
  constructor(public name: string, public age: number) {
  }

  sayHello() {
    console.log(`Hello ${this.name} (${this.age})`);
  }

  isAdult(): boolean {
    return this.age > 18;
  }
}

const user = new UserImpl('Marc', 42);