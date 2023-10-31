declare interface User {
  name: string;
}

declare interface UserWithAge extends User {
  age: number;
}

class UserImpl implements User, UserWithAge {
  constructor(public name: string, public age: number) {
  }

  sayHello() {
    console.log(`Hello ${this.name} (${this.age})`);
  }
}

const user = new UserImpl('Marc', 42);