export class Card {
  id: number;
  name: string;
  type: string;
  attack: number;
  defense: number;
  description: string;

  constructor(
    id: number,
    name: string,
    type: string,
    attack: number,
    defense: number,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.description = description;
  }
}
