export class Account {
  id: string;
  name: string;
  email: string;

  constructor(partial: Partial<Account>) {
    Object.assign(this, partial);
  }
}
