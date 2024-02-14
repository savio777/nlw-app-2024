import { useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import useCartStore from "@/stores/cart-store";
import { Header } from "@/components/header";
import { ProductItem } from "@/components/product-item";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";
import { formatToMoneyBR } from "@/utils/functions/maskMoney";

const styles = StyleSheet.create({
  listProducts: {
    flexGrow: 1,
  },
});

export default function Cart() {
  const refSCroll = useRef<ScrollView>(null);

  const { products, totalValueProduts } = useCartStore();

  const [address, setAddress] = useState("");

  const totalValue = formatToMoneyBR(totalValueProduts());

  const handleSubmit = () => {
    if (!address) {
      refSCroll?.current?.scrollToEnd();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={200}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1">
          <Header title="Seu carrinho" showCartIcon={false} />

          <ScrollView
            ref={refSCroll}
            contentContainerStyle={styles.listProducts}
          >
            <View className="p-5">
              {products.length && (
                <View className="border-b border-slate-700">
                  {products.map((product) => (
                    <ProductItem key={product.id} data={product} />
                  ))}
                </View>
              )}

              {!products.length && (
                <Text className="font-body text-slate-400 text-center my-8">
                  Seu carrinho está vazio
                </Text>
              )}

              {products.length && (
                <>
                  <View className="flex-row gap-2 items-center mt-5 mb-4">
                    <Text className="text-white text-xl font-subtitle">
                      Total:
                    </Text>

                    <Text className="text-lime-400 text-2xl font-heading">
                      {totalValue}
                    </Text>
                  </View>

                  <Input
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Informe o endereço de entrega"
                  />
                </>
              )}
            </View>
          </ScrollView>

          <View className="p-5 gap-5">
            <Button onPress={handleSubmit}>
              <Button.Text>Enviar pedido</Button.Text>

              <Button.Icon nameIcon="arrow-right-circle" />
            </Button>

            <LinkButton href="/" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
