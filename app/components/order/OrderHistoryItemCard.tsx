import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { GlobalColors } from "../../theme/GlobalColors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { OrderedItem } from "../../types/data";

interface OrderHistoryItemCardProps {
    isSubscription: boolean;
    orderItem: OrderedItem;
}

const OrderHistoryItemCard: React.FC<OrderHistoryItemCardProps> = ({
    isSubscription,
    orderItem,
}) => {
    return (
        <View
            style={{
                backgroundColor: "#f8f8f8",
                borderRadius: 10,
                marginVertical: 8,
            }}
        >
            <View
                style={{ flexDirection: "row", alignItems: "center", paddingLeft: 16 }}
            >
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        src={orderItem.product.images[0]}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ marginHorizontal: 16 }}>
                    <Text numberOfLines={1} style={{ fontWeight: "600" }}>
                        {orderItem.product.name}
                    </Text>
                    <Text style={{ color: "#898989", marginVertical: 8, fontSize: 16 }}>
                        X {orderItem.quantity}
                    </Text>
                </View>
            </View>
            {isSubscription ? (
                <View
                    style={{
                        alignItems: "center",
                        paddingVertical: 5,
                        backgroundColor: GlobalColors.secondaryColor,
                        borderBottomEndRadius: 10,
                        borderBottomLeftRadius: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 10,
                    }}
                >
                    <Text style={{ fontWeight: "700", fontSize: 13 }}>
                        Track Subcription
                    </Text>
                    <View style={{ marginLeft: 8 }}>
                        <FontAwesome6
                            name="arrow-right-to-bracket"
                            size={15}
                            color="black"
                        />
                    </View>
                </View>
            ) : (
                <View
                    style={{
                        alignItems: "center",
                        paddingVertical: 5,
                        backgroundColor: "#f0f0f0",
                        borderBottomEndRadius: 10,
                        borderBottomLeftRadius: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 10,
                    }}
                >
                    <Text style={{ fontSize: 12 }}>
                        Yet to be delivered
                    </Text>
                    <View style={{ marginLeft: 5 }}>
                        <Ionicons
                            name="checkmark-circle"
                            size={18}
                            color={"#797979"}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

export default OrderHistoryItemCard;

const styles = StyleSheet.create({
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
});
