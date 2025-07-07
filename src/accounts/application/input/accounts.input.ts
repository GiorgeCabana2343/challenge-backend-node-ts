import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AccountsInput {
  @Field()
  readonly name: string;

  @Field()
  readonly email: string;
}
