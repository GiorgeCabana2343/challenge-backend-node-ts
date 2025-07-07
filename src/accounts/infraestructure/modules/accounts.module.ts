import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsSchema } from '../database/model/accounts.model';
import { AccountsResolver } from '../ui/accounts.resolver';
import { accountProviders } from '../providers/entity/accounts.providers';
import { AccountsService } from '../../application/services/accounts.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Accounts', schema: AccountsSchema }],
      'accounts',
    ),
  ],
  providers: [AccountsResolver, AccountsService, ...accountProviders],
})
export class AccountsModule {}
