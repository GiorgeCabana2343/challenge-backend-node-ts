import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { AccountRepository } from '../../domain/repository/account.repository';
import { Account } from '../../domain/entity/accounts.entity';
import { IAccounts } from 'src/accounts/domain/interface/accounts.interface';

@Injectable()
export class AccountsService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private readonly accountRepository: AccountRepository,
  ) { }

  async createAccount(body: IAccounts): Promise<Account> {
    if (!body.name || !body.name.trim()) {
      throw new BadRequestException('Name es requerido');
    }
    if (!body.email || !body.email.trim()) {
      throw new BadRequestException('Email es requerido.');
    }
    const name = await this.accountRepository.findByName(body.name);
    if (name.length > 0) {
      throw new BadRequestException('Name ya fue usado');
    }
    const email = await this.accountRepository.findByEmail(body.email);
    if (email) {
      throw new BadRequestException('Email ya fue usado');
    }

    return await this.accountRepository.create(body);
  }

  async findById(id: string): Promise<Account | null> {
    return await this.accountRepository.findById(id);
  }

  async findByName(name: string): Promise<Account[]> {
    return await this.accountRepository.findByName(name);
  }

  async findByEmail(email: string): Promise<Account | null> {
    return await this.accountRepository.findByEmail(email);
  }
}
