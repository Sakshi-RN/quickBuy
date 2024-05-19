import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    Platform,
} from "react-native";
import React from "react";
import { GlobalColors } from "../../theme/GlobalColors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { Product } from "../../types/data";
import AddToCartButton from "../common/AddToCartButton";
import { useNavigation } from "@react-navigation/native";

interface ProductVCardProps {
    product: Product;
}

const ProductVCard: React.FC<ProductVCardProps> = ({ product }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={[styles.productContainer]}
        >
            <View style={styles.imageWrapper}>
                <Pressable onPress={() => {
                    navigation.navigate("ProductsScreen");
                }} style={styles.container}>
                    <Image
                        style={styles.image}
                        src={product.images[0]}
                        resizeMode="contain"
                    />
                </Pressable>
            </View>
            <Pressable onPress={() => {
                navigation.navigate("ProductsScreen");
            }} style={styles.containerOne}>
                <Text style={styles.productTitle}>{product.name}</Text>
            </Pressable>
            <View style={styles.containerTwo}>
                <Pressable style={styles.infoWrapper}>
                    <Text style={styles.productQuantity}>{product.quantity}</Text>
                </Pressable>
            </View>
            <View style={styles.orderWrapper}>
                <View style={styles.priceWrapper}>
                    <Text style={styles.actualPrice}>₹{product.price}</Text>
                    <Text style={styles.oldPrice}>₹{product.mrp}</Text>
                </View>
                <AddToCartButton product={product} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        width: SCREEN_WIDTH * 0.44,
        height: SCREEN_HEIGHT * 0.28,
        marginHorizontal: 8,
        zIndex: 10,
        elevation: 1.6,
        borderRadius: 8,
        paddingVertical: 8,
        marginVertical: 8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#e6e6e6",
        // overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    addtoWishlistWrapper: {
        width: "100%",
        position: "relative",
        zIndex: 10,
        alignItems: "flex-end",
        paddingRight: 8,
        paddingTop: 8,
        margin: 0,
    },
    imageWrapper: {
        position: "relative",
        width: "100%",
        height: "46%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 6,
        padding: 4,
        zIndex: 10,
    },
    image: {
        width: "100%",
        height: "94%",
        padding: 8,
    },
    productTitle: {
        fontSize: 13.5,
        fontWeight: "500",
    },
    infoWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 4,
        paddingHorizontal: 8,
    },
    productQuantity: {
        fontSize: 12,
        fontWeight: "600",
        color: "#a8a8a8",
    },
    reviewWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        fontSize: 13,
        fontWeight: "600",
    },
    ratingCount: {
        fontSize: 12,
        fontWeight: "400",
        color: "#a8a8a8",
    },
    orderWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 4,
        marginHorizontal: 4,
        paddingHorizontal: 8,
        height: "20%",
    },
    priceWrapper: {
        alignItems: "flex-start",
    },
    actualPrice: {
        fontWeight: "700",
    },
    oldPrice: {
        fontSize: 11,
        color: "#87888a",
        textDecorationLine: "line-through",
    },
    ctaBtn: {
        width: "50%",
        borderRadius: 6,
        padding: 0,
        backgroundColor: GlobalColors.primaryOrange,
    },
    ctaLabel: {
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center",
        color: "white",
        margin: 0,
    },
    WishListActionWrapper: {
        width: "100%",
        alignItems: "flex-end",
    },
    checkbox: {
        borderRadius: 10,
        zIndex: 10,
        marginTop: 3,
        marginRight: 8,
    },
    container: {
        width: "100%",
        height: "100%",
    },
    containerOne: {
        width: "100%",
        paddingHorizontal: 8,
    },
    containerTwo: {
        width: "100%",
        alignItems: "center",
    },
});

export default React.memo(ProductVCard);
