import { Pressable, Text, View } from "react-native";
import React from "react";
import SubscriptionSelectChip from "./SubscriptionSelectChip";
import { MaterialIcons } from "@expo/vector-icons";

interface SubscriptionSelectionConatinerProps {
    toggleStartDate: (value: boolean) => void;
    date: string;
}
const SubscriptionSelectionConatiner: React.FC<
    SubscriptionSelectionConatinerProps
> = ({ toggleStartDate, date }) => {
    return (
        <View
            style={{
                flexWrap: "wrap",
                justifyContent: "space-between",
                paddingVertical: 16,
            }}
        >
            <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text style={{ fontWeight: "700" }}>Subscription Type</Text>
                <View style={{ flexDirection: "row" }}>
                    <SubscriptionSelectChip />
                    <SubscriptionSelectChip />
                    <SubscriptionSelectChip />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text style={{ fontWeight: "700" }}>Start Date</Text>
                <Pressable
                    onPress={() => {
                        toggleStartDate(true);
                    }}
                    style={{
                        backgroundColor: "#f0f0f0",
                        paddingHorizontal: 12,
                        paddingVertical: 5,
                        borderRadius: 4,
                        marginVertical: 16,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 16,
                    }}
                >
                    <Text style={{ fontWeight: "600" }}>{date}</Text>
                    <MaterialIcons
                        name="edit"
                        size={14}
                        color="black"
                        style={{ marginLeft: 4 }}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default SubscriptionSelectionConatiner;

