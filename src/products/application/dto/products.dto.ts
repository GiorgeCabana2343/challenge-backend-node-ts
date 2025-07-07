import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductsType {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly sku: string;

  @Field(() => Int)
  readonly stock: number;

  @Field()
  readonly accountId: string;
}
