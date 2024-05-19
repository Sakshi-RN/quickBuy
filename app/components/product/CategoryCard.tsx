import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../../constants";
import { ProductCategory } from "../../types/data";
import { useNavigation } from "@react-navigation/native";

interface CategoryCardProps {
    category: ProductCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.navigate("ProductsScreen");
            }}
            style={{ width: SCREEN_WIDTH * 0.3, alignItems: "center" }}
        >
            <View style={{ width: 64, height: 64 }}>
                <Image
                    src={category.imgURL[0]}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                        objectFit: "cover",
                    }}
                    resizeMode="contain"
                />
            </View>
            <Text
                style={{
                    textAlign: "center",
                    marginVertical: 8,
                    fontWeight: "600",
                    color: "#787878",
                }}
            >
                {category.name}
            </Text>
        </Pressable>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({});
