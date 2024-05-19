import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import OrderHistoryOverviewCard from "../components/order/OrderHistoryOverviewCard";
import { ApiGetOrdersAsync } from "../services/Order";
import { Order } from "../types/data";

const OrdersHistoryListScreen = () => {
    const [ordersData, setOrdersData] = useState<Order[]>([]);

    const handleFetchOrdersAction = async () => {
        const response = await ApiGetOrdersAsync();
        setOrdersData(response.data);
    };

    useEffect(() => {
        handleFetchOrdersAction();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: "#fafafa " }}>
            <ScrollView
                contentContainerStyle={{ paddingVertical: 16 }}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled
            >
                {ordersData &&
                    ordersData.map((item, index) => {
                        return <OrderHistoryOverviewCard key={index} order={item} />;
                    })}
            </ScrollView>
        </View>
    );
};

export default OrdersHistoryListScreen;

const styles = StyleSheet.create({});
