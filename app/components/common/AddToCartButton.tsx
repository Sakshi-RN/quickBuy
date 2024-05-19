import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons"; // Import Expo Icons
import { GlobalColors } from "../../theme/GlobalColors";
import { Product } from "../../types/data";
import { StoreInterface } from "../../types/reducers";
import {
    addToCart,
    removeFromCart,
    updateItem,
} from "../../store/reducers/CartReducer";

interface AddToCartButtonProps {
    product: Product | undefined;
    isSubscriptionAvail?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
    const [items, setItems] = useState(0);
    const dispatch = useDispatch();
    const cartItemExists = useSelector(
        (store: StoreInterface) => store.cart.products
    ).filter((item) => item.product._id === product?._id);

    useEffect(() => {
        if (cartItemExists.length > 0) {
            setItems((prev) => cartItemExists[0]?.items || 0);
        }
        else {
            setItems(0)
        }
    }, [cartItemExists.length]);

    const handleIncreaseItem = () => {
        const newitems = items + 1;
        dispatch(
            updateItem({
                productId: product?._id,
                newItems: newitems,
            })
        );
        setItems((prev) => prev + 1);
    };

    const handleDecreaseItem = () => {
        const newitems = items - 1;
        setItems((prev) => prev - 1);
        if (items === 1) {
            dispatch(
                removeFromCart({
                    productId: product?._id,
                })
            );
        } else {
            dispatch(
                updateItem({
                    productId: product?._id,
                    newItems: newitems,
                })
            );
        }
    };

    const handleAddItem = () => {
        dispatch(
            addToCart({
                product: product,
                isSubscriptionAvail: false,
                items: 1,
            })
        );
        setItems((prev) => 1);
    };

    return (
        <View
            style={[styles.container, { backgroundColor: GlobalColors.primaryColor }]}
        >
            {items === 0 ? (
                <TouchableOpacity onPress={handleAddItem} style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.itemContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleDecreaseItem}
                        style={styles.itemButton}
                    >
                        <Ionicons name="remove" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.itemCount}>{items}</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleIncreaseItem}
                        style={styles.itemButton}
                    >
                        <Ionicons name="add" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default AddToCartButton;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 80,
        height: 32,
    },
    buttonWrapper: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "600",
        color: "white",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        backgroundColor: "#fcfcfc",
        borderWidth: 1,
        borderColor: GlobalColors.primaryColor,
        borderRadius: 5,
    },
    itemButton: {
        width: "33%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalColors.primaryColor,
    },
    itemCount: {
        width: "30%",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "600",
    },
});
