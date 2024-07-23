import { Deck } from 'src/modules/deck/domain/models/deck.model';
import { User } from './user.model';

export class UserBuilder {
  private id: number;
  private username: string;
  private email: string;
  private password: string;
  private decks: Array<Deck>;

  constructor() {
    this.id = 0;
    this.username = '';
    this.email = '';
    this.password = '';
    this.decks = [];
  }

  withId(id: number): UserBuilder {
    this.id = id;
    return this;
  }

  withUsername(username: string): UserBuilder {
    this.username = username;
    return this;
  }

  withEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  withPassword(password: string): UserBuilder {
    this.password = password;
    return this;
  }

  withDecks(decks: Array<Deck>): UserBuilder {
    this.decks = decks;
    return this;
  }

  build(): User {
    return new User(
      this.id,
      this.username,
      this.email,
      this.password,
      this.decks,
    );
  }
}
