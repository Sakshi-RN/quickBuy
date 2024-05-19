import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalColors } from "../../theme/GlobalColors";
import { useNavigation } from "@react-navigation/native";

const SubscriptionSelectChip = () => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.navigate("SubscripptionCustomizationScreen");
            }}
            style={{
                backgroundColor: GlobalColors.secondaryColor,
                paddingHorizontal: 16,
                paddingVertical: 2,
                borderRadius: 100,
                marginVertical: 16,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 16,
            }}
        >
            <Text style={{ fontWeight: "600" }}>Daily</Text>
            <MaterialIcons
                name="edit"
                size={14}
                color="black"
                style={{ marginLeft: 4 }}
            />
        </Pressable>
    );
};

export default SubscriptionSelectChip;

const styles = StyleSheet.create({});
