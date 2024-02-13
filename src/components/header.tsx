import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import LogoImg from "@/assets/logo.png";
import useCartStore from "@/stores/cart-store";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  const { countAllProduts } = useCartStore();

  const cartQuantity = countAllProduts();

  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5 mt-8">
      <View className="flex-1">
        <Image source={LogoImg} className="h-6 w-32" />

        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {!!cartQuantity && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
            <Text className="text-slate-900 font-bold text-xs">
              {cartQuantity}
            </Text>
          </View>

          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}
