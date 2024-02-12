import { FlatList, View, ListRenderItem } from "react-native";

import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";

import { CATEGORIES } from "@/utils/data/products";
import { useCallback, useState } from "react";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState(CATEGORIES[0]);

  const handleChangeCategory = useCallback((item: string) => {
    setCategorySelected(item);
  }, []);

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item }) => (
      <CategoryButton
        title={item}
        isSelected={categorySelected === item}
        onPress={() => handleChangeCategory(item)}
      />
    ),
    [categorySelected]
  );

  return (
    <View className="flex-1">
      <Header title="Faça seu pedido" />

      <FlatList
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 4, paddingHorizontal: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={CATEGORIES}
        renderItem={renderItem}
      />
    </View>
  );
}
