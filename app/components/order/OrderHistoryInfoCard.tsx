import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { GlobalColors } from "../../theme/GlobalColors";
import { Address, Payment } from "../../types/data";

interface OrderHistoryInfoCardProps {
    address: Address | undefined;
    payment: Payment | undefined;
}

const OrderHistoryInfoCard: React.FC<OrderHistoryInfoCardProps> = ({
    address,
    payment,
}) => {
    console.log(address);
    return (
        <View
            style={{
                backgroundColor: "#fff",
                marginHorizontal: 10,
                paddingHorizontal: 16,
                paddingVertical: 10,
                paddingBottom: 20,
            }}
        >
            <Text style={{ fontWeight: "600", fontSize: 15 }}>Delivery Address</Text>
            <Text style={{ marginTop: 5 }}>
                {address?.flatPlot}, {address?.blockName}, {address?.colonyName},{" "}
                {address?.areaName}, {address?.city}, {address?.state},{" "}
                {address?.pincode}
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 15, marginTop: 24 }}>
                Contact Details
            </Text>
            <View
                style={{
                    marginVertical: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text>Shaik Farooque</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="call" size={16} color="black" />
                    <Text style={{ marginHorizontal: 8, fontWeight: "500" }}>
                        +91 8639334522
                    </Text>
                </View>
            </View>
            <Text style={{ fontWeight: "600", fontSize: 15, marginTop: 24 }}>
                Payment Details
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                    justifyContent: "space-between",
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>Paid Online</Text>
                    <View style={{ marginLeft: 5 }}>
                        <Ionicons
                            name="checkmark-circle"
                            size={18}
                            color={GlobalColors.primaryGreen}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: "#202423" }}>
                        Rs. {(Number(payment?.amount) / 100).toFixed(2)}
                    </Text>
                </View>
            </View>
            <Text style={{ fontSize: 13, color: "#989898", marginTop: 16 }}>
                For detailed billing information download the invoice
            </Text>
        </View>
    );
};

export default OrderHistoryInfoCard;

const styles = StyleSheet.create({});
