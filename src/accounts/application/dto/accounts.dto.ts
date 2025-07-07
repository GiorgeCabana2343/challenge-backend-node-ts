import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccountsType {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly email: string;
}
