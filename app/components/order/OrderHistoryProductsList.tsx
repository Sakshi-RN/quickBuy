import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderHistoryItemCard from "./OrderHistoryItemCard";
import { OrderedItem } from "../../types/data";

interface OrderHistoryProductsListProps {
    orders: OrderedItem[]
}

const OrderHistoryProductsList: React.FC<OrderHistoryProductsListProps> = ({ orders }) => {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                marginHorizontal: 10,
                paddingHorizontal: 16,
                paddingVertical: 10,
                paddingBottom: 20,
                marginTop: 16,
            }}
        >
            <Text style={{ fontWeight: "600", fontSize: 15, marginBottom: 16 }}>
                Items Details
            </Text>
            <View>
                {
                    orders && orders?.map((item, index) => {
                        return <OrderHistoryItemCard key={index} isSubscription={false} orderItem={item} />
                    })
                }
            </View>
        </View>
    );
};

export default OrderHistoryProductsList;

const styles = StyleSheet.create({});
