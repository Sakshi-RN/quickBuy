import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import UserStatusRecommendations from "../../components/home/UserStatusRecommendations";
import ProductsRecommendationContainer from "../../components/home/ProductsRecommendationContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FullBannerCard from "../../components/home/FullBannerCard";
import TwinPromotionBanners from "../../components/home/TwinPromotionBanners";
import ShopByCategories from "../../components/home/ShopByCategories";
import SnackBarCart from "../../components/common/SnackBarCart";

const HomeScreen: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.snackbarWrapper}>
        <SnackBarCart />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 64 }}
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
      >
        <UserStatusRecommendations />
        <ProductsRecommendationContainer />
        <FullBannerCard />
        <ShopByCategories />
        <TwinPromotionBanners />
        <ProductsRecommendationContainer />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  snackbarWrapper: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 10,
  },
});
