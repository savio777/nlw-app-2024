import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

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

const useCartStore = create(
  persist<ICartStore>(
    (set, get) => ({
      quantity: 0,
      products: [],
      add: (product) => {
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        }));
      },
      remove: (product) => {
        set((state) => ({
          products: cartInMemory.remove(state.products, product),
        }));
      },
      clean: () => {
        set(() => ({ products: [] }));
      },
      countAllProduts: () => {
        const products = get().products;

        if (!!products.length) {
          return products.reduce(
            (total, product) => total + product.quantity,
            0
          );
        }

        return 0;
      },
      totalValueProduts: () => {
        const products = get().products;

        if (!!products.length) {
          return products.reduce(
            (total, product) => total + product.quantity * product.price,
            0
          );
        }

        return 0;
      },
    }),
    { name: "nlw-2024-cart", storage: createJSONStorage(() => AsyncStorage) }
  )
);

export default useCartStore;
