declare enum EventType {
  User = 'USER',
  Data = 'DATA',
}

declare type User = {
  type: EventType.User;
  name: string;
};

declare type UserWithAge = User & {
  age: number;
};

declare type Data = {
  type: EventType.Data;
  value: number | string;
};

declare type Event = {
  timestamp: number;
  payload: User | UserWithAge | Data;
};

const event: Event = {
  timestamp: Date.now(),
  payload: {
    type: EventType.User,
    name: 'Marc',
    age: 42,
  }
}

if (event.payload.type === EventType.User) {
  console.log(event.payload.name);
}

