import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { SCREEN_HEIGHT } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const FullBannerCard = () => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.navigate("ProductsScreen");
            }}
            style={{
                width: "100%",
                height: SCREEN_HEIGHT * 0.28,
                paddingVertical: 16,
                paddingHorizontal: 16,
            }}
        >
            <View>
                <Image
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    src="https://img.freepik.com/premium-vector/super-offer-banner-template-with-editable-text-effect_535749-643.jpg"
                    resizeMode="cover"
                />
            </View>
        </Pressable>
    );
};

export default FullBannerCard;

const styles = StyleSheet.create({});
