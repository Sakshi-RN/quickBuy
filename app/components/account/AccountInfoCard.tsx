import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AccountInfoCard = () => {
    return (
        <View
            style={{
                width: "100%",
                backgroundColor: "#fff",
                paddingHorizontal: 16,
                paddingVertical: 32,
                borderRadius: 16,
                alignItems: "center",
                flexDirection: "row",
                marginVertical: 16
            }}
        >
            <Text
                style={{
                    paddingHorizontal: 24,
                    paddingVertical: 16,
                    borderRadius: 100,
                    backgroundColor: "#f0f0f0",
                    fontSize: 24,
                    fontWeight: "600",
                }}
            >
                SS
            </Text>
            <View style={{ marginHorizontal: 16 }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "600",
                        marginBottom: 10,
                    }}
                >
                    Sakshi Sahu
                </Text>
                <Text style={{ fontSize: 15, color: "#989898", fontWeight: "500" }}>
                    +91 00000 00000
                </Text>
            </View>
        </View>
    )
}

export default AccountInfoCard

const styles = StyleSheet.create({})