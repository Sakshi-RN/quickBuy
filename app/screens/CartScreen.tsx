import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState, useMemo } from "react";
import CartsProductList from "../components/cart/CartsProductList";
import CartCouponCard from "../components/cart/CartCouponCard";
import CartBillingCard from "../components/cart/CartBillingCard";
import CartPaymentCard from "../components/cart/CartPaymentCard";
import AddressSelectionModal from "../components/common/AddressSelectionModal";
import { useSelector } from "react-redux";
import { StoreInterface } from "../types/reducers";
import EmptyCartScreen from "../components/cart/EmptyCartScreen";

const CartScreen = () => {
    const [toggleAddress, setToggleAddress] = useState(false);

    // Memoize the useSelector function
    const cartItems = useSelector((store: StoreInterface) => store.cart.products);

    if (cartItems.length === 0) {
        return <EmptyCartScreen />;
    }

    return (
        <View style={styles.cartContainer}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 12 }}
            >
                <CartsProductList />
                <CartCouponCard />
                <CartBillingCard />
            </ScrollView>
            <CartPaymentCard
                toggleAddressModal={() => setToggleAddress(!toggleAddress)}
            />
            {toggleAddress && (
                <AddressSelectionModal
                    closeModal={() => setToggleAddress(false)}
                    toggled={toggleAddress}
                />
            )}
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    cartContainer: {
        backgroundColor: "#f0f0f0",
        flex: 1,
    },
});
