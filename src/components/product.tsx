import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageSourcePropType;
};

type Props = {
  data: ProductDataProps;
} & TouchableOpacityProps;

export function Product({
  data: { title, description, thumbnail },
  ...rest
}: Props) {
  return (
    <TouchableOpacity className="w-full flex-row items-center pb-4" {...rest}>
      <Image source={thumbnail} className="w-20 h-20 rounded-md" />

      <View className="flex-1 ml-3 ">
        <Text className="text-slate-100 font-subtitle flex-1 text-base">
          {title}
        </Text>
        <Text className="text-slate-400 text-xs leading-5 mt-0.5">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
