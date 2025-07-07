import { AccountsRepositoryImpl } from '../../database/repository/accounts.impl.repository';

export const accountProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useClass: AccountsRepositoryImpl,
  },
];
