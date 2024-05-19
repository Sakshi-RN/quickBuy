import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CouponCard from "../components/common/CouponCard";
import { GlobalColors } from "../theme/GlobalColors";
import { Coupon } from "../types/data";
import { AxiosGetAllCouponAsync } from "../services/CouponApi";

const CouponScreen = () => {
    const [couponsData, setCouponsData] = useState<Coupon[]>([]);
    const handleFetchCouponsActions = async () => {
        const response = await AxiosGetAllCouponAsync();
        setCouponsData(response.data);
    };
    useEffect(() => {
        handleFetchCouponsActions();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Promo Code"
                    placeholderTextColor="#999"
                />
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {couponsData.map((item, index) => {
                    return <CouponCard key={index} coupon={item} />;
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CouponScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        marginTop: 10,
        marginBottom: 16,
        padding: 10,
        justifyContent: "space-between",
        borderRadius: 6,
        alignItems: "center",
    },
    input: {
        color: "black",
        fontWeight: "600",
        flex: 1,
        marginRight: 10,
    },
    applyButton: {
        backgroundColor: GlobalColors.primaryColor,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 6,
    },
    applyButtonText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "bold",
    },
});
