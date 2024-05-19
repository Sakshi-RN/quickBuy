import { StyleSheet, View } from "react-native";
import React from "react";
import ProductCategoriesContainer from "../../components/product/ProductCategoriesContainer";
import ProductsContainer from "../../components/product/ProductsContainer";
import { SCREEN_WIDTH } from "../../constants";
import SnackBarCart from "../../components/common/SnackBarCart";

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.snackbarWrapper}>
        <SnackBarCart />
      </View>
      <View style={styles.flatlistView}>
        <ProductCategoriesContainer />
        <View style={{ width: SCREEN_WIDTH * 0.8, backgroundColor: "#fff" }}>
          <ProductsContainer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  snackbarWrapper: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 10,
  },
  flatlistView: {
    flexDirection: "row",
    backgroundColor: '#fff'
  },
});

export default ProductsScreen;
