import {
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import React from "react";
import { GlobalColors } from "../../theme/GlobalColors";
import { Ionicons } from "@expo/vector-icons";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Order } from "../../types/data";
import { useDispatch } from "react-redux";
import { setOrderMeta } from "../../store/reducers/OrderReducer";

interface OrderHistoryOverviewCardProps {
    order: Order;
}

const OrderHistoryOverviewCard: React.FC<OrderHistoryOverviewCardProps> = ({
    order,
}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const firstItem = order.orderedItems[0];
    const orderPlaced =
        new Date(order.orderPlaced).toDateString() +
        " " +
        new Date(order.orderPlaced).toLocaleTimeString();
    const ordersSplice = order.orderedItems.slice(1);
    const additionalItemsCount =
        ordersSplice.length > 2 ? ordersSplice.length - 2 : 0;

    const hanldeOrderClick = () => {
        console.log("Handle Order Click ", order._id)
        dispatch(
            setOrderMeta({
                orderID: order.orderId,
                order_Id: order._id,
                orderPlaced: orderPlaced,
            })
        );
        navigation.navigate("OrderHistoryScreen");
    };
    return (
        <Pressable onPress={hanldeOrderClick} style={[styles.container]}>
            <View style={styles.topProductWrapper}>
                <View>
                    <Text style={styles.productName}>Order ID {order.orderId}</Text>
                    <Text style={styles.orderTime}>Order Placed on {orderPlaced}</Text>
                </View>
                <Text style={[styles.pendingStatus]}>placed</Text>
            </View>
            <View
                style={{
                    marginVertical: 8,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        src={firstItem?.product.images[0]}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ marginHorizontal: 16 }}>
                    <Text style={{ fontWeight: "600" }}>{firstItem?.product.name}</Text>
                    <Text style={{ color: "#898989", marginVertical: 8, fontSize: 16 }}>
                        X {firstItem?.quantity}
                    </Text>
                </View>
            </View>
            <View style={styles.hr}></View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {ordersSplice.slice(0, 2).map((item, index) => {
                    return (
                        <Text
                            key={index}
                            style={{
                                color: "#898989",
                                marginVertical: 8,
                                marginRight: 8,
                                fontSize: 13,
                            }}
                        >
                            {item.product.name} x {item.quantity}
                        </Text>
                    );
                })}

                {additionalItemsCount > 0 && (
                    <Text style={{ color: "#898989", marginVertical: 8, fontSize: 13 }}>
                        +{additionalItemsCount} more
                    </Text>
                )}
            </View>
            <View
                style={{ marginTop: 8, flexDirection: "row", alignItems: "center" }}
            >
                <Text style={{ color: "#898989", fontSize: 13 }}>
                    Order yet to be fullfilled
                </Text>
                <View style={{ marginLeft: 5 }}>
                    <Ionicons name="checkmark-circle" size={18} color={"#a8a8a8"} />
                </View>
            </View>
        </Pressable>
    );
};

export default OrderHistoryOverviewCard;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        paddingVertical: 8,
        paddingBottom: 16,
        backgroundColor: "white",
        marginHorizontal: 10,
        paddingHorizontal: 20,
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: "#e0e0ff",
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    imageWrapper: {
        position: "relative",
        width: SCREEN_WIDTH * 0.2,
        height: SCREEN_HEIGHT * 0.1,
        backgroundColor: "white",
        borderRadius: 8,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    topProductWrapper: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 6,
    },
    pendingStatus: {
        fontSize: 13,
        color: "#989898",
        fontWeight: "500",
        backgroundColor: "#efefef",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        textTransform: "capitalize",
    },
    cancleStatus: {
        color: "#EF233C",
        backgroundColor: "#ffe3e6",
    },
    productsWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    productText: {
        fontSize: 15,
        color: "#898898",
        fontWeight: "500",
    },
    otherText: {
        fontSize: 13.5,
        marginTop: 16,
        marginBottom: 4,
        color: "#787878",
    },
    hr: {
        width: "100%",
        height: 1,
        backgroundColor: "#e0e0e0",
        marginVertical: 4,
    },
    orderTime: {
        fontSize: 11,
        color: "#898989",
    },
    cancleOrderCTA: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalColors.secondaryBlack,
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 5,
    },
    cancelText: {
        color: "#EF233C",
    },
    productName: {
        fontSize: 14,
        fontWeight: "500",
    },
    containerOne: {
        alignItems: "center",
    },
    text: {
        fontSize: 13,
        color: GlobalColors.primaryGreen,
    },
    cancel: {
        fontSize: 14,
        fontWeight: "500",
        color: "white",
    },
    containerTwo: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 3,
    },
    containerThree: {
        fontSize: 13,
        marginRight: 8,
        fontWeight: "400",
        color: "#888888",
    },
    textOne: {
        fontSize: 16,
        color: GlobalColors.primaryColor,
        fontWeight: "600",
    },
    subscriptionCard: {
        position: "absolute",
        backgroundColor: "#1098F7",
        paddingHorizontal: 16,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    subscriptionText: {
        color: "white",
        fontWeight: "500",
        fontSize: 13,
        marginLeft: 4,
    },
    orderedItems: {
        marginBottom: 8,
    },
});
