import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { GlobalColors } from "../../theme/GlobalColors";
import { Product } from "../../types/data";
import { ComingSoonToast } from "./Toasts";

interface SubscribeButtonProps {
    product?: Product | undefined;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = () => {
    const [subscribe, setSubscribe] = useState(false);
    // const cartProducts = useSelector(
    //     (store: storeInterface) => store.cart.products
    // );
    // const cartItemExists = cartProducts.filter(
    //     (item) => item.product._id === product?._id
    // );

    // useEffect(() => {
    //     if (cartItemExists[0]?.isSubscription && cartItemExists.length !== 0) {
    //         setSubscribe(true);
    //     } else {
    //         setSubscribe(false);
    //     }
    // }, [cartItemExists]);

    // const handleSubscribeItem = () => {
    //     if (cartItemExists.length !== 0) {
    //         if (!subscribe) {
    //             dispatch(updateToSubscription({ productId: product?._id }));
    //         }
    //         return;
    //     }
    //     dispatch(addToCart({ product, isSubscriptionAvail: true, items: 1 }));
    // };
    const handleSubscribeItem = () => {
        ComingSoonToast()
    }

    return (
        <View style={[styles.container, subscribe && { borderColor: GlobalColors.primaryColor }]}>
            <TouchableOpacity
                onPress={handleSubscribeItem}
                style={[
                    styles.buttonWrapper,
                    subscribe ? styles.subscribeButton : styles.unsubscribeButton,
                ]}
            >
                <Text style={styles.buttonText}>Subscribe</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SubscribeButton;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 80,
        height: 32,
        marginVertical: 16,
        borderWidth: 1,
        overflow: 'hidden'
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
        color: GlobalColors.primaryColor,
    },
    subscribeButton: {
        backgroundColor: "#fcce05", // This color is used for subscribed items
    },
    unsubscribeButton: {
        backgroundColor: "transparent",
        borderColor: GlobalColors.primaryColor,
        borderWidth: 1,
        borderRadius: 5,
    },
});
