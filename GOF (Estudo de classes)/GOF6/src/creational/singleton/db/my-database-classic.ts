/**
 * Viola o principio design-system (Single-responsiblity Principle), por gerenciar mais de uma coisa.
 */

import User from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  private add(user: User): void {
    this.users.push(user);
  }

  private remove(index: number): void {
    this.users.splice(index, 1);
  }

  private show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
