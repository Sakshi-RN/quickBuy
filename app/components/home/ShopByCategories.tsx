import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "../product/CategoryCard";
import { AxiosGetAllCategoryAsync } from "../../services/Category";
import { ProductCategory } from "../../types/data";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../store/reducers/CategoryReducer";

const ShopByCategories = () => {
    const [categoriesData, setCategoriesData] = useState<ProductCategory[]>([]);
    const dispatch = useDispatch();
    const handleFetchCategoriesAction = async () => {
        const response = await AxiosGetAllCategoryAsync();
        const firstCategory = response.data.at(0);
        dispatch(
            setCategoryId({
                id: firstCategory._id,
                name: firstCategory.name[0],
            })
        );
        setCategoriesData(response.data);
    };
    useEffect(() => {
        handleFetchCategoriesAction();
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
                Shop By Category
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    rowGap: 24,
                    justifyContent: "flex-start",
                }}
            >
                {categoriesData?.map((item, index) => {
                    return <CategoryCard key={item._id} category={item} />;
                })}
            </View>
        </View>
    );
};

export default ShopByCategories;

const styles = StyleSheet.create({});
