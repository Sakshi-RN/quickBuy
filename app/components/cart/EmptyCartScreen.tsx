import { Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { GlobalColors } from "../../theme/GlobalColors";
import { useNavigation } from "@react-navigation/native";

const EmptyCartScreen = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <View style={{ alignItems: "center", width: "100%" }}>
                <FontAwesome
                    name="shopping-cart"
                    color="#79797960"
                    size={64}
                    style={{ marginBottom: 16 }}
                />
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                    Your cart is empty
                </Text>
                <Text
                    style={{
                        marginVertical: 10,
                        fontSize: 15,
                        color: "#898989",
                        width: "50%",
                        textAlign: "center",
                    }}
                >
                    Looks like you haven't made your choice yet
                </Text>
                <Pressable
                    onPress={() => {
                        navigation.navigate("ProductsScreen");
                    }}
                    style={{
                        backgroundColor: GlobalColors.primaryColor,
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 16
                    }}
                >
                    <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
                        Add Item
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default EmptyCartScreen;

