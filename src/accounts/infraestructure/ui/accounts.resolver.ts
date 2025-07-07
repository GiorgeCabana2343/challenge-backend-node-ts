import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AccountsService } from '../../application/services/accounts.service';
import { AccountsType } from '../../application/dto/accounts.dto';
import { AccountsInput } from '../../application/input/accounts.input';

@Resolver()
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Mutation(() => AccountsType)
  async createAccounts(@Args('body') input: AccountsInput) {
    return this.accountsService.createAccount(input);
  }

  @Query(() => AccountsType)
  async accountsById(@Args('id', { type: () => String }) id: string) {
    return this.accountsService.findById(id);
  }

  @Query(() => [AccountsType])
  async accountsByName(@Args('name', { type: () => String }) name: string) {
    return this.accountsService.findByName(name);
  }
}
