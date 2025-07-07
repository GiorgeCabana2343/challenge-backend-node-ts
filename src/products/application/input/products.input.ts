import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductsInput {
  @Field()
  readonly name: string;

  @Field()
  readonly sku: string;

  @Field()
  readonly stock: number;

  @Field()
  readonly accountId: string;
}
