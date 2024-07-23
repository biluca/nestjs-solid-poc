import { Deck } from 'src/modules/deck/domain/models/deck.model';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  decks: Array<Deck>;

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    decks: Array<Deck>,
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.decks = decks;
  }
}
