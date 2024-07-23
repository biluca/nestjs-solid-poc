import { Card } from './card.model';

export class CardBuilder {
  private id: number;
  private name: string;
  private type: string;
  private attack: number;
  private defense: number;
  private description: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.type = '';
    this.attack = 0;
    this.defense = 0;
    this.description = '';
  }

  setId(id: number): CardBuilder {
    this.id = id;
    return this;
  }

  setName(name: string): CardBuilder {
    this.name = name;
    return this;
  }

  setType(type: string): CardBuilder {
    this.type = type;
    return this;
  }

  setAttack(attack: number): CardBuilder {
    this.attack = attack;
    return this;
  }

  setDefense(defense: number): CardBuilder {
    this.defense = defense;
    return this;
  }

  setDescription(description: string): CardBuilder {
    this.description = description;
    return this;
  }

  build(): Card {
    return new Card(
      this.id,
      this.name,
      this.type,
      this.attack,
      this.defense,
      this.description,
    );
  }
}
