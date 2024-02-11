import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
  return (
    <View className="items-center justify-center flex-1 bg-slate-900">
      <ActivityIndicator size={30} color={colors.white} />
    </View>
  );
}
