import { StyleSheet, View } from "react-native";
import React from "react";
import MenuTopItemCard from "./MenuTopItemCard";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ComingSoonToast } from "../common/Toasts";

const TopMenuItemsList = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 16,
            }}
        >
            <MenuTopItemCard
                renderIcon={() => (
                    <Ionicons name="wallet-outline" size={20} color="black" />
                )}
                label={"Credits"}
                navigate={() => { ComingSoonToast() }} isComingSoon={true} />
            <MenuTopItemCard
                renderIcon={() => <Feather name="package" size={20} color="black" />}
                label={"Orders"}
                navigate={() => {
                    navigation.navigate("OrdersHistoryListScreen");
                }} isComingSoon={false} />
            <MenuTopItemCard
                renderIcon={() => (
                    <MaterialCommunityIcons name="bag-suitcase" size={20} color="black" />
                )}
                label={"Set Vacation"}
                navigate={() => { ComingSoonToast() }} isComingSoon={true} />
        </View>
    );
};

export default TopMenuItemsList;

const styles = StyleSheet.create({});
