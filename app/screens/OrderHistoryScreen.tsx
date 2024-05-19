import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import OrderHistoryInfoCard from "../components/order/OrderHistoryInfoCard";
import OrderHistoryProductsList from "../components/order/OrderHistoryProductsList";
import { Order } from "../types/data";
import { ApigetOrderByIdAsync } from "../services/Order";
import { useSelector } from "react-redux";
import { StoreInterface } from "../types/reducers";

const OrderHistoryScreen = () => {
    const [orderData, setOrderData] = useState<Order>();
    const orderId = useSelector((store: StoreInterface) => store.order).order_Id;
    const handleFetchOrderActions = async () => {
        const response = await ApigetOrderByIdAsync(orderId);
        setOrderData(response.data);
    };
    useEffect(() => {
        handleFetchOrderActions();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: "#f0f0ff " }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
                <OrderHistoryInfoCard
                    address={orderData?.addressId}
                    payment={orderData?.paymentId}
                />
                <OrderHistoryProductsList orders={orderData?.orderedItems!} />
            </ScrollView>
        </View>
    );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({})
