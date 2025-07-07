export class Products {
  id: string;
  name: string;
  sku: string;
  stock: number;
  accountId: string;

  constructor(partial: Partial<Products>) {
    Object.assign(this, partial);
  }
}
