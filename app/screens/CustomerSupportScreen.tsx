import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const CustomerSupportScreen = () => {
    const phoneNumber = "+910000000000";
    const whatsappNumber = "whatsapp://send?phone=+910000000000";

    const handlePhoneCallPress = () => {
        Linking.openURL(`tel:${phoneNumber}`).catch(() =>
            alert("Could not make the phone call. Please try again later.")
        );
    };

    const handleWhatsAppPress = () => {
        Linking.openURL(whatsappNumber).catch(() =>
            alert("Make sure WhatsApp is installed on your device.")
        );
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fcfcfc",
                paddingHorizontal: 16,
                paddingVertical: 16,
                width: "100%",
            }}
        >
            <Text style={{ fontSize: 17, fontWeight: "600", color: "#202423" }}>
                Get in Touch with Us
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "#a0a0a0",
                    marginVertical: 8,
                }}
            >
                Have a question or need assistance? We're here to help! You can reach
                out to our customer support team
            </Text>
            <Pressable
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: "#f0f0f4",
                    paddingVertical: 10,
                    borderRadius: 8,
                    borderWidth: 0.5,
                    marginVertical: 16,
                    borderColor: "#e0e0e8",
                }}
                onPress={handlePhoneCallPress}
            >
                <View>
                    <Ionicons name="call" style={{ fontSize: 20 }} color="black" />
                </View>
                <Text style={{ fontSize: 16, fontWeight: "600", marginHorizontal: 8 }}>
                    Call Us Now
                </Text>
            </Pressable>
            <Pressable
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: "#25d366",
                    paddingVertical: 10,
                    borderRadius: 8,
                    borderWidth: 0.5,
                    marginVertical: 16,
                    borderColor: "#e0e0e8",
                }}
                onPress={handleWhatsAppPress}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        marginHorizontal: 8,
                        color: "#fff",
                    }}
                >
                    Contact via
                </Text>
                <View>
                    <FontAwesome5 name="whatsapp" size={20} color="#fff" />
                </View>
            </Pressable>
        </View>
    );
};

export default CustomerSupportScreen;

const styles = StyleSheet.create({
    dropdown: {
        height: 44,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 8,
        width: "100%",
        backgroundColor: "#f0f0f4",
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
