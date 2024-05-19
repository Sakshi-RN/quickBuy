import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalColors } from "../../theme/GlobalColors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import AddToCartButton from "../common/AddToCartButton";
import { FontAwesome6 } from "@expo/vector-icons";
import { Product } from "../../types/data";

interface CartProductCardProps {
    product: Product;
    isSubscription: boolean;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
    isSubscription,
    product,
}) => {
    return (
        <View
            style={{ backgroundColor: "#fff", borderRadius: 10, marginVertical: 8 }}
        >
            <View
                style={{
                    flexDirection: "row",
                    paddingVertical: 16,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                }}
            >
                <Pressable style={{ flexDirection: "row" }}>
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
            {isSubscription && (
                <View
                    style={{
                        alignItems: "center",
                        paddingVertical: 5,
                        backgroundColor: GlobalColors.secondaryColor,
                        borderBottomEndRadius: 10,
                        borderBottomLeftRadius: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontWeight: "700" }}>Customize your Subcription</Text>
                    <View style={{ marginLeft: 8 }}>
                        <FontAwesome6
                            name="arrow-right-to-bracket"
                            size={15}
                            color="black"
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

export default CartProductCard;

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
        backgroundColor: "white",
        borderRadius: 8,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    contentWrapper: {
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 8,
        bottom: "40%",
    },
    detailsWrapper: {
        marginHorizontal: 10,
    },
    productName: {
        fontSize: 15,
        fontWeight: "500",
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
        fontWeight: "700",
        fontSize: 14,
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
