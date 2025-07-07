import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { AccountRepository } from 'src/accounts/domain/repository/account.repository';
import { Account } from 'src/accounts/domain/entity/accounts.entity';

@Injectable()
export class AccountsRepositoryImpl implements AccountRepository {
  constructor(
    @InjectModel('Accounts', 'accounts') private readonly accountsModel: Model<Account>,
  ) {}

  async create(account: Partial<Account>): Promise<Account> {
    const accounts = new this.accountsModel(account);
    return await accounts.save();
  }

  async findById(id: string): Promise<Account | null> {
    return await this.accountsModel.findById(id).exec();
  }

  async findByName(name: string): Promise<Account[]> {
    return await this.accountsModel.find({ name: new RegExp(name, 'i') }).exec();
  }

  async findByEmail(email: string): Promise<Account | null>{
    return await this.accountsModel.findOne({ email }).exec();
  }
}
