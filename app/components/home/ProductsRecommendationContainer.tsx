import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductVCard from "../product/ProductVCard";
import { Product } from "../../types/data";
import { AxiosGetPopularProductsAsync } from "../../services/ProductsApi";

const ProductsRecommendationContainer = () => {
    const [productsData, setProductsData] = useState<Product[]>([]);

    const handleFetchProductsAction = async () => {
        const response = await AxiosGetPopularProductsAsync()
        setProductsData(response.data);
    };
    useEffect(() => {
        handleFetchProductsAction();
    }, []);
    return (
        <View
            style={{
                paddingHorizontal: 16,
                paddingVertical: 24,
                backgroundColor: "#f0f0f8",
            }}
        >
            <Text style={{ fontSize: 15, fontWeight: "700", marginBottom: 16 }}>
                Most Popular Products
            </Text>
            {/* Replace this ProductVCard with the flatlist here */}
            <FlatList
                data={productsData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <ProductVCard product={item} />}
            />
        </View>
    );
};

export default ProductsRecommendationContainer;

const styles = StyleSheet.create({});
