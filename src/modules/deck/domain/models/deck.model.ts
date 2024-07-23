import { Card } from 'src/modules/card/domain/models/card.model';

export class Deck {
  id: number;
  name: string;
  userId: number;
  cards: Array<Card>;

  constructor(id: number, name: string, userId: number, cards: Array<Card>) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.cards = cards;
  }
}
