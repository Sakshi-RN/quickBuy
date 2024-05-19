import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../theme/GlobalColors";
import { Coupon } from "../../types/data";
import { useDispatch } from "react-redux";
import { setCoupon } from "../../store/reducers/CartReducer";
import { useNavigation } from "@react-navigation/native";

interface CouponCardProps {
    coupon: Coupon;
}
const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleCouponApply = () => {
        dispatch(
            setCoupon({
                couponId: coupon._id,
            })
        );
        navigation.goBack();
    };
    return (
        <Pressable style={styles.couponItem}>
            <View style={styles.couponCodeContainer}>
                <Text style={styles.couponCodeText}>FLAT {coupon.discount}%</Text>
            </View>
            <View style={{ paddingHorizontal: 16, width: "100%" }}>
                <View style={styles.couponInfoContainer}>
                    <Text style={styles.couponCode}>{coupon.couponCode}</Text>
                </View>
                <Text numberOfLines={1} style={styles.couponDescription}>
                    Get this offer on order above Rs. 500
                </Text>
                <Text
                    numberOfLines={3}
                    style={{
                        fontSize: 13.5,
                        color: "#202423",
                        marginVertical: 5,
                        width: "86%",
                    }}
                >
                    You can apply this coupon and use it before its valid date and avail
                    {coupon.discount}% off on the orders above the 500
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginVertical: 16,
                        paddingRight: 16,
                    }}
                >
                    <Text style={styles.couponDescription}>
                        *offer Valid till 27/04/24
                    </Text>
                    <Pressable onPress={handleCouponApply}>
                        <Text style={styles.couponDiscount}>APPLY NOW</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    );
};

export default CouponCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey",
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "#ffff",
        marginTop: 10,
        padding: 10,
        justifyContent: "space-between",
        borderRadius: 6,
    },
    input: {
        color: "black",
        fontWeight: "600",
    },
    applyButton: {
        backgroundColor: "#0acc75",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    applyButtonText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    couponItem: {
        backgroundColor: "#fcfcfc",
        marginVertical: 8,
        borderRadius: 8,
        flexDirection: "row",
    },
    couponCode: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        textTransform: "uppercase",
        backgroundColor: "#dfeae3",
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 4,
    },
    couponDiscount: {
        fontSize: 14,
        fontWeight: "bold",
        color: GlobalColors.primaryColor,
        marginRight: 20,
    },
    couponDescription: {
        fontSize: 12,
        color: "#797979",
        marginVertical: 5,
    },
    couponCodeContainer: {
        backgroundColor: GlobalColors.primaryColor,
        width: 36,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },

    couponCodeText: {
        width: 100,
        fontWeight: "bold",
        fontSize: 16,
        color: "#ffff",
        textAlign: "center",
        transform: [{ rotate: "-90deg" }],
    },

    couponInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
});
