import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../theme/GlobalColors";
import { ApiGetBillingFromCart } from "../../services/CartApi";
import { Billing } from "../../types/data";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../../types/reducers";
import { setNetAmount } from "../../store/reducers/CartReducer";

const CartBillingCard = () => {
    const dispatch = useDispatch();
    const [billingData, setBillingData] = useState<Billing>();
    const couponApplied = useSelector(
        (store: StoreInterface) => store.cart.couponId
    );

    useEffect(() => {
        const fetchBillingData = async () => {
            const response = await ApiGetBillingFromCart();
            setBillingData(response.data);
            dispatch(setNetAmount(response.data?.totalBill));
        };
        fetchBillingData();
    }, [couponApplied]);

    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.title}>Billing Details</Text>
                <View style={styles.containerOne}>
                    <Text style={styles.subTotal}>Sub total</Text>
                    <Text style={styles.subTotal}>
                        {"\u20B9"}
                        {billingData?.subTotals.toFixed(2)}
                    </Text>
                </View>
                <View style={styles.containerOne}>
                    <Text style={styles.strikeOff}>Delivery charges</Text>
                    <Text style={styles.strikeOff}>
                        + {"\u20B9"}
                        {billingData?.deliveryCharges.toFixed(2)}
                    </Text>
                </View>
                <View style={styles.containerOne}>
                    <Text style={styles.strikeOff}>Platform Fee</Text>
                    <Text style={styles.strikeOff}>
                        + {"\u20B9"}
                        {billingData?.platformFee.toFixed(2)}
                    </Text>
                </View>
                <View style={styles.containerOne}>
                    <Text style={styles.grandTotal}>Grand total</Text>
                    <Text style={styles.grandTotal}>
                        {"\u20B9"}
                        {billingData?.subTotals.toFixed(2)}
                    </Text>
                </View>
                {billingData?.couponDiscount !== 0 && (
                    <View style={styles.containerOne}>
                        <Text style={styles.coupon}>Coupon Discount</Text>
                        <Text style={styles.coupon}>
                            - {"\u20B9"}
                            {billingData?.couponDiscount.toFixed(2)}
                        </Text>
                    </View>
                )}
                <View style={styles.breakLine}></View>
                <View style={styles.containerOne}>
                    <Text style={styles.netPayable}>Net payable</Text>
                    <Text style={styles.netPayable}>
                        {"\u20B9"}
                        {billingData?.totalBill.toFixed(2)}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default React.memo(CartBillingCard);

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#e0e0e0",
        marginVertical: 16,
        borderRadius: 16,
    },
    title: {
        fontSize: 16,
        paddingBottom: 16,
        fontWeight: "700",
        color: "#202423",
    },
    containerOne: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2,
        backgroundColor: "white",
    },
    subTotal: {
        fontSize: 15,
        fontWeight: "600",
    },
    netPayable: {
        fontSize: 16,
        fontWeight: "600",
    },
    breakLine: {
        width: "100%",
        height: 1,
        backgroundColor: "#e0e0e0",
        marginVertical: 8,
    },
    grandTotal: {
        fontSize: 14,
        fontWeight: "500",
        marginVertical: 6,
    },
    coupon: {
        fontSize: 14,
        fontWeight: "500",
        color: GlobalColors.primaryGreen,
    },
    strikeOff: {
        fontSize: 13,
        fontWeight: "400",
        color: "#a0a0a0",
        textDecorationLine: "line-through",
    },
});
