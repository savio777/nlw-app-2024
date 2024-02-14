import { ProductProps } from "@/utils/data/products";
import { IProductCartData } from "../cart-store";

export function add(
  products: IProductCartData[],
  newProduct: ProductProps
): IProductCartData[] {
  const existingProduct = products.find((item) => item.id === newProduct.id);

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? {
            ...product,
            quantity: product.quantity + 1,
          }
        : product
    );
  }

  return [
    ...products,
    {
      ...newProduct,
      quantity: 1,
    },
  ];
}

export function remove(
  products: IProductCartData[],
  removeProduct: ProductProps
): IProductCartData[] {
  const updatedProducts = products.map((product) =>
    product.id === removeProduct.id
      ? {
          ...product,
          quantity: product.quantity - 1,
        }
      : product
  );

  return updatedProducts.filter((product) => product.quantity > 0);
}
