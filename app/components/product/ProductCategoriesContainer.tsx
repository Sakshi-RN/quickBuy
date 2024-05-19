import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import SideCategoryCard from "./SideCategoryCard";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { ProductCategory } from "../../types/data";
import { AxiosGetAllCategoryAsync } from "../../services/Category";

const ProductCategoriesContainer = () => {
    const [categoriesData, setCategoriesData] = useState<ProductCategory[]>([]);

    const handleFetchCategoriesAction = async () => {
        const response = await AxiosGetAllCategoryAsync();
        setCategoriesData(response.data);
    };
    useEffect(() => {
        handleFetchCategoriesAction();
    }, []);
    return (
        <FlatList
            data={categoriesData}
            contentContainerStyle={{
                backgroundColor: "#f0f0f8",
                borderRightWidth: 1,
                borderRightColor: "#e8e8e8",
                paddingBottom: SCREEN_HEIGHT * 0.12
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <SideCategoryCard category={item} />}
            keyExtractor={(item) => item._id}
            style={{ width: SCREEN_WIDTH * 0.2 }}
        />
    );
};

export default ProductCategoriesContainer;

const styles = StyleSheet.create({});
