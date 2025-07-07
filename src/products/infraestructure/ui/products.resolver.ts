import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from '../../application/services/products.service';
import { ProductsType } from '../../application/dto/products.dto';
import { ProductsInput } from '../../application/input/products.input';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => ProductsType)
  createProducts(@Args('body') body: ProductsInput) {
    return this.productsService.createProducts(body);
  }

  @Query(() => ProductsType)
  async productsById(@Args('id', { type: () => String }) id: string) {
    return await this.productsService.findById(id);
  }

  @Query(() => [ProductsType])
  async productsByAccount(
    @Args('accountId', { type: () => String }) accountId: string,
  ) {
    return await this.productsService.findByAccountId(accountId);
  }

  @Mutation(() => String)
  async purchaseProduct(
    @Args('accountId', { type: () => String }) accountId: string,
    @Args('productId', { type: () => String }) productId: string,
    @Args('quantity', { type: () => Number }) quantity: number,
  ): Promise<string> {
    return await this.productsService.purchaseProduct(
      accountId,
      productId,
      quantity,
    );
  }
}
