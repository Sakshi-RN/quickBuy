import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalColors } from "../../theme/GlobalColors";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { StoreInterface } from "../../types/reducers";
import { AxiosGetAddressesByIdAsync } from "../../services/AddressApi";
import { Address } from "../../types/data";
import CartNetPayCard from "./CartNetPayCard";

interface CartPaymentCardProps {
    toggleAddressModal: () => void;
}
const CartPaymentCard: React.FC<CartPaymentCardProps> = ({
    toggleAddressModal,
}) => {
    const addressApplied = useSelector(
        (store: StoreInterface) => store.cart
    ).addressId;
    const couponApplied = useSelector(
        (store: StoreInterface) => store.cart
    ).couponId;
    const [addressData, setAddressData] = useState<Address>();
    const handleFetchAddressAction = async () => {
        const response = await AxiosGetAddressesByIdAsync(addressApplied);
        setAddressData(response.data);
    };
    useEffect(() => {
        if (addressApplied !== "") {
            handleFetchAddressAction();
        }
    }, [addressApplied, couponApplied]);
    return (
        <View style={styles.paymentWrapper}>
            <View style={styles.addressWrapper}>
                <View style={styles.addressInfo}>
                    <Ionicons
                        name="home-sharp"
                        size={22}
                        color={GlobalColors.primaryColor}
                    />
                    {addressApplied !== "" ? (
                        <View
                            style={{
                                width: "100%",
                                alignItems: "flex-start",
                                marginLeft: 10,
                            }}
                        >
                            <Text style={styles.addressTitle}>Deliver to</Text>
                            <Text numberOfLines={2} style={styles.address}>
                                {addressData?.flatPlot}, {addressData?.blockName},{" "}
                                {addressData?.colonyName}, {addressData?.areaName},{" "}
                                {addressData?.city}, {addressData?.state},{" "}
                                {addressData?.pincode}
                            </Text>
                        </View>
                    ) : (
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.addressTitle}>Add your Delivery Adrees</Text>
                        </View>
                    )}
                </View>
                <Pressable
                    onPress={() => {
                        toggleAddressModal();
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14.5,
                            marginLeft: 6,
                            color: GlobalColors.primaryColor,
                            fontWeight: "500",
                            borderWidth: 0.5,
                            backgroundColor: "#f6f6f7",
                            paddingHorizontal: 8,
                            borderColor: GlobalColors.primaryColor,
                            paddingVertical: 1,
                            borderRadius: 4,
                        }}
                    >
                        Change
                    </Text>
                </Pressable>
            </View>
            <CartNetPayCard />
        </View>
    );
};

export default CartPaymentCard;

const styles = StyleSheet.create({
    paymentWrapper: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: "#e0e0e0",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    addressWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 12,
    },
    addressInfo: {
        width: "76%",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
    },
    addressTitle: {
        fontSize: 15,
        fontWeight: "500",
    },
    addrsLabel: {
        fontSize: 14,
        paddingHorizontal: 8,
        paddingVertical: 1,
        fontWeight: "600",
        borderRadius: 3,
        marginLeft: 8,
        borderWidth: 0.5,
        backgroundColor: "#f6f6f6",
        borderColor: "#e0e0e0",
        color: "#797979",
    },
    address: {
        width: "80%",
        fontSize: 13,
        fontWeight: "400",
        color: "#989898",
    },
    checkoutWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalColors.primaryColor,
        borderRadius: 6,
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    placeOrdContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
