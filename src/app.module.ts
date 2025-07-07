import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/infraestructure/modules/accounts.module';
import { ProductsModule } from './products/infraestructure/modules/products.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/eiAccounts', {
      connectionName: 'accounts',
    }),
    MongooseModule.forRoot('mongodb://localhost/eiBusiness', {
      connectionName: 'products',
    }),

    AccountsModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
