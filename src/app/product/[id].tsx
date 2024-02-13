import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

import useCartStore from "@/stores/cart-store";
import { PRODUCTS } from "@/utils/data/products";
import { formatToMoneyBR } from "@/utils/functions/maskMoney";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";

export default function Product() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const { add } = useCartStore();

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  const handleAddToCart = () => {
    add(product);
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <Image
        className="w-full h-52"
        resizeMode="cover"
        source={product.cover}
      />

      <View className="flex-1 p-5 mt-8">
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatToMoneyBR(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon nameIcon="plus-circle" />

          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton href="/" title="Voltar ao cardápio" />
      </View>
    </View>
  );
}
