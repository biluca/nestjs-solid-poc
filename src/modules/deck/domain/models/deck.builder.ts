import { Card } from 'src/modules/card/domain/models/card.model';
import { Deck } from './deck.model';

export class DeckBuilder {
  private id: number;
  private name: string;
  private userId: number;
  private cards: Array<Card>;

  constructor() {
    this.id = 0;
    this.name = '';
    this.userId = 0;
  }

  withId(id: number): DeckBuilder {
    this.id = id;
    return this;
  }

  withName(name: string): DeckBuilder {
    this.name = name;
    return this;
  }

  withUserId(userId: number): DeckBuilder {
    this.userId = userId;
    return this;
  }

  withCards(cards: Array<Card>): DeckBuilder {
    this.cards = cards;
    return this;
  }

  build(): Deck {
    return new Deck(this.id, this.name, this.userId, this.cards);
  }
}
