import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

interface MenuListItemCardProps {
    onClick: () => void
    renderIcon: () => React.ReactElement; // The function that returns the icon component
    label: string; // The label text to display
}

const MenuListItemCard: React.FC<MenuListItemCardProps> = ({ renderIcon, label, onClick }) => {
    return (
        <Pressable
            onPress={onClick}
            style={{
                width: "100%",
                backgroundColor: "#fff",
                paddingHorizontal: 16,
                paddingVertical: 14,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 8,
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginRight: 16 }}>
                    {renderIcon()}
                </View>
                <Text style={{ fontSize: 16, fontWeight: "600", color: "#696969" }}>
                    {label}
                </Text>
            </View>
            <Entypo name="chevron-right" size={24} color="#696969" />
        </Pressable>
    );
};

export default MenuListItemCard;

const styles = StyleSheet.create({});
