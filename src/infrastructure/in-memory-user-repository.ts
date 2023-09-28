import { UserRepository } from "src/domain/user-repository";

import { User } from "../domain/user";

const users: User[] = [
  {
    id: "1",
    email: "daniel@gmail.com",
  },
  {
    id: "2",
    email: "examplo@gmail.com",
  },
];

export class InMemoryUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find(user => user.id === userId);

    if (!user) {
      return null;
    }

    return new User(user.id, user.email);
  }
}
