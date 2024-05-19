import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import { SCREEN_HEIGHT } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const TwinPromotionBanners = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                width: "100%",
                height: SCREEN_HEIGHT * 0.25,
                paddingVertical: 16,
                paddingHorizontal: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Pressable
                onPress={() => {
                    navigation.navigate("ProductsScreen");
                }}
                style={{ width: "47%", height: "100%" }}
            >
                <Image
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    src="https://img.freepik.com/premium-vector/super-offer-banner-template-with-editable-text-effect_535749-643.jpg"
                    resizeMode="cover"
                />
            </Pressable>
            <Pressable
                onPress={() => {
                    navigation.navigate("ProductsScreen");
                }}
                style={{ width: "47%", height: "100%" }}
            >
                <Image
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    src="https://img.freepik.com/premium-vector/super-offer-banner-template-with-editable-text-effect_535749-643.jpg"
                    resizeMode="cover"
                />
            </Pressable>
        </View>
    );
};

export default TwinPromotionBanners;

const styles = StyleSheet.create({});
