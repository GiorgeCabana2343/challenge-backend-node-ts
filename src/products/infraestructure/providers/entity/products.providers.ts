import { ProductsRepositoryImpl } from '../../database/repository/products.impl.repository';

export const productsProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useClass: ProductsRepositoryImpl,
  },
];
