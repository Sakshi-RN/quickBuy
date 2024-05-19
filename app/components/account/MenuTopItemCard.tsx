import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../../constants";
import { GlobalColors } from "../../theme/GlobalColors";

interface MenuTopItemCardProps {
    renderIcon: () => React.ReactElement; // The function that returns the icon component
    label: string; // The label text to display
    navigate: () => void;
    isComingSoon: boolean;
}

const MenuTopItemCard: React.FC<MenuTopItemCardProps> = ({
    renderIcon,
    label,
    navigate,
    isComingSoon
}) => {
    return (
        <View style={{ alignItems: "center", position: "relative", justifyContent: 'flex-end', marginTop: 16 }}>
            {isComingSoon && (<View
                style={{
                    backgroundColor: GlobalColors.secondaryColor,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 100,
                    position: "absolute",
                    top: -16,
                    zIndex: 30,
                }}
            >
                <Text style={{ fontSize: 11, fontWeight: "700" }}>Coming Soon</Text>
            </View>)}
            <Pressable
                onPress={navigate}
                style={{
                    alignItems: "center",
                    backgroundColor: "#fff",
                    width: SCREEN_WIDTH * 0.28,
                    borderRadius: 12,
                    paddingVertical: 10,
                }}
            >
                <View
                    style={{
                        backgroundColor: "#eaeaea",
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        borderRadius: 100,
                    }}
                >
                    {renderIcon()}
                </View>
                <Text
                    style={{
                        fontSize: 15,
                        marginTop: 8,
                        fontWeight: "500",
                        color: "#696969",
                    }}
                >
                    {label}
                </Text>
            </Pressable>
        </View>
    );
};

export default MenuTopItemCard;

const styles = StyleSheet.create({});
