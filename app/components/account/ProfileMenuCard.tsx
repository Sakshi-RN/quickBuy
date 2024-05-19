import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

interface ProfileMenuCardProps {
    name: string,
    value: string
    onClick: () => void
}
const ProfileMenuCard: React.FC<ProfileMenuCardProps> = ({ name, value, onClick }) => {
    return (
        <Pressable
            onPress={onClick}
            style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingVertical: 16,
                borderRadius: 4,
            }}
        >
            <View>
                <Text style={{ fontSize: 15, fontWeight: "500", textTransform: "capitalize" }}>{name}</Text>
                <Text style={{ fontSize: 13, color: "#787878", textTransform: "capitalize" }}>{value}</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color="black" />
        </Pressable>
    )
}

export default ProfileMenuCard

const styles = StyleSheet.create({})