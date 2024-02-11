import { Header } from "@/components/header";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1">
      <Header title="Faça seu pedido" />
      <Text className="font-heading text-2xl text-white">iae</Text>
    </View>
  );
}
