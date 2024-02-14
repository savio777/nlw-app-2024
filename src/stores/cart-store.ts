import { create } from "zustand";

import { ProductProps } from "@/utils/data/products";
import * as cartInMemory from "./helpers/cart-in-memory";

export type IProductCartData = ProductProps & {
  quantity: number;
};

type ICartStore = {
  products: IProductCartData[];
  add: (product: ProductProps) => void;
  remove: (product: ProductProps) => void;
  clean: () => void;
  countAllProduts: () => number;
  totalValueProduts: () => number;
};

const useCartStore = create<ICartStore>((set, get) => ({
  quantity: 0,
  products: [],
  add: (product) => {
    set((state) => ({ products: cartInMemory.add(state.products, product) }));
  },
  remove: (product) => {},
  clean: () => {},
  countAllProduts: () => {
    const products = get().products;

    if (products.length) {
      return products.reduce((total, product) => total + product.quantity, 0);
    }

    return 0;
  },
  totalValueProduts: () => {
    const products = get().products;

    if (products.length) {
      return products.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      );
    }

    return 0;
  },
}));

export default useCartStore;
