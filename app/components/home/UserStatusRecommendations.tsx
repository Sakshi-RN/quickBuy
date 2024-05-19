import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { GlobalColors } from "../../theme/GlobalColors";
import { useNavigation } from "@react-navigation/native";

const UserStatusRecommendations = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                marginVertical: 16,
                backgroundColor: "#fff",
            }}
        >
            <Text style={{ width: "60%", fontSize: 14, fontWeight: "500" }}>
                There is no order scheduled tommorow ,Add some items .
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
                }}
            >
                <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
                    Add Item
                </Text>
            </Pressable>
        </View>
    );
};

export default UserStatusRecommendations;

const styles = StyleSheet.create({});
