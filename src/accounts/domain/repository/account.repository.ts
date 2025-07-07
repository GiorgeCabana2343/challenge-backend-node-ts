import { Account } from '../entity/accounts.entity';

export interface AccountRepository {
  create(account: Partial<Account>): Promise<Account>;
  findById(id: string): Promise<Account | null>;
  findByName(name: string): Promise<Account[]>;
  findByEmail(email: string): Promise<Account | null>; 
}
