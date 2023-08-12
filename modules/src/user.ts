import type { Person } from "./types"


export default class User implements Person {

  constructor(public username: string, public email: string) {
    this.username = username;
    this.email = email;
  }
}