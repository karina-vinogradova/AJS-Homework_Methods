export default class Character {
  constructor(name) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Incorrect name');
    }
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack += ((this.attack * 20) / 100);
    this.defence += ((this.defence * 20) / 100);
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= (points * (1 - this.defence / 100));
    }
  }
}
