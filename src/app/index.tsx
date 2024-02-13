import { useRef, useCallback, useState } from "react";
import {
  FlatList,
  View,
  ListRenderItem,
  SectionList,
  StyleSheet,
  SectionListRenderItem,
  Text,
  SectionListData,
} from "react-native";

import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";

import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products";
import { Product } from "@/components/product";

const styles = StyleSheet.create({
  flastListHorizontalContentContainerStyle: {
    gap: 4,
    paddingHorizontal: 20,
  },
  flastListVerticalContentContainerStyle: {
    paddingBottom: 50,
  },
});

export default function Home() {
  const refScrollVertical = useRef<SectionList>(null);

  const [categorySelected, setCategorySelected] = useState(CATEGORIES[0]);

  const handleChangeCategory = useCallback((item: string) => {
    setCategorySelected(item);

    const sectionIndex = CATEGORIES.findIndex(
      (categoryItem) => categoryItem === item
    );

    if (refScrollVertical?.current) {
      refScrollVertical.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  }, []);

  const renderItemListHorizontal: ListRenderItem<string> = useCallback(
    ({ item }) => (
      <CategoryButton
        title={item}
        isSelected={categorySelected === item}
        onPress={() => handleChangeCategory(item)}
      />
    ),
    [categorySelected]
  );

  const renderHeaderItemListVertical = useCallback(
    ({ section }: { section: SectionListData<ProductProps> }) => (
      <Text className="text-white text-xl font-heading mt-8 mb-3">
        {section.title}
      </Text>
    ),
    []
  );

  const renderItemListVertical: SectionListRenderItem<ProductProps> =
    useCallback(({ item }) => <Product data={item} />, []);

  return (
    <View className="flex-1">
      <Header title="Faça seu pedido" />

      <FlatList
        className="max-h-10 mt-5"
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={CATEGORIES}
        renderItem={renderItemListHorizontal}
        contentContainerStyle={styles.flastListHorizontalContentContainerStyle}
      />

      <SectionList
        ref={refScrollVertical}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        sections={MENU}
        stickySectionHeadersEnabled={false}
        renderItem={renderItemListVertical}
        renderSectionHeader={renderHeaderItemListVertical}
        contentContainerStyle={styles.flastListVerticalContentContainerStyle}
      />
    </View>
  );
}
