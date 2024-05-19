import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { GlobalColors } from "../../theme/GlobalColors";
import AddToCartButton from "../common/AddToCartButton";
import { Product } from "../../types/data";
import { useNavigation } from "@react-navigation/native";

interface ProductHCardProps {
    product: Product;
}

const ProductHCard: React.FC<ProductHCardProps> = ({ product }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flexDirection: "row",
                paddingVertical: 16,
                backgroundColor: "#ffffff",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                height: SCREEN_HEIGHT * 0.19,
            }}
        >
            <Pressable
                onPress={() => {
                    navigation.navigate("ProductDescriptionScreen", {
                        productId: product._id || "",
                    });
                }}
                style={{ flexDirection: "row", width: "64%" }}
            >
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        src={product.images[0]}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.detailsWrapper}>
                    <View>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productQuantity}>{product.quantity}</Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={styles.actualPrice}>₹{product.price}</Text>
                        <Text style={styles.previousPrice}>₹{product.mrp}</Text>
                    </View>
                </View>
            </Pressable>
            <View style={styles.contentWrapper}>
                <AddToCartButton product={product} />
            </View>
        </View>
    );
};

export default ProductHCard;

const styles = StyleSheet.create({
    productContainer: {
        width: "100%",
        height: "85%",
        alignItems: "center",
        flexDirection: "row",
    },
    imageContainer: {
        position: "relative",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    imageWrapper: {
        position: "relative",
        width: SCREEN_WIDTH * 0.2,
        height: SCREEN_HEIGHT * 0.1,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    contentWrapper: {
        marginHorizontal: 8,
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        right: 8,
    },
    detailsWrapper: {
        marginHorizontal: 10,
    },
    productName: {
        fontSize: 14,
        fontWeight: "500",
        width: "100%",
    },
    productQuantity: {
        fontSize: 13,
        color: "gray",
    },
    ratingWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ratingContentWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rating: {
        fontSize: 14,
        fontWeight: "600",
    },
    ratingCount: {
        fontSize: 13,
        color: "gray",
    },
    priceNctaWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    actualPrice: {
        fontWeight: "600",
        fontSize: 13,
    },
    previousPrice: {
        fontSize: 12,
        textDecorationLine: "line-through",
        color: "gray",
    },
    cardText: {
        width: "76%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderRadius: 4,
        paddingVertical: 3,
    },
    offerText: {
        fontWeight: "500",
        fontSize: 12.5,
    },
    textColor: {
        color: GlobalColors.primaryGreen,
    },
    offerWrapper: {
        position: "relative",
        width: SCREEN_WIDTH * 0.903,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginHorizontal: 8,
    },
    ATCConatinerStyle: {
        width: 76,
        height: 28,
    },
    container: {
        position: "absolute",
        width: SCREEN_WIDTH * 0.88,
        bottom: 0,
        height: 1,
        backgroundColor: "#e4e4e4",
        borderRadius: 1,
    },
});
