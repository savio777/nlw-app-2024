import { ScrollView, StyleSheet, Text, View } from "react-native";

import useCartStore from "@/stores/cart-store";
import { Header } from "@/components/header";
import { ProductItem } from "@/components/product-item";
import { formatToMoneyBR } from "@/utils/functions/maskMoney";

const styles = StyleSheet.create({
  listProducts: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default function Cart() {
  const { products, totalValueProduts } = useCartStore();

  const totalValue = formatToMoneyBR(totalValueProduts());

  return (
    <View className="flex-1">
      <Header title="Seu carrinho" showCartIcon={false} />

      {products.length && (
        <ScrollView className="p-5" contentContainerStyle={styles.listProducts}>
          {products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </ScrollView>
      )}

      {!products.length && (
        <Text className="font-body text-slate-400 text-center my-8">
          Seu carrinho está vazio
        </Text>
      )}

      <View className="flex-row gap-2 items-center mt-5 mb-4 px-5">
        <Text className="text-white text-xl font-subtitle">Total:</Text>

        <Text className="text-lime-400 text-2xl font-heading">
          {totalValue}
        </Text>
      </View>
    </View>
  );
}
