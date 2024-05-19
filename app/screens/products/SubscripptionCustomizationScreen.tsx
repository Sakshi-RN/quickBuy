import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AddToCartButton from "../../components/common/AddToCartButton";
import { Dropdown } from "react-native-element-dropdown";

const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
];

const SubscriptionTimelineCard = () => {
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-evenly",
                paddingHorizontal: 8,
                backgroundColor: "#f8f8f8",
                marginVertical: 5,
                paddingVertical: 16,
                borderRadius: 8,
            }}
        >
            <Text style={{ width: "28%", fontWeight: "500", fontSize: 15 }}>
                21 Apr 2024
            </Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                placeholder={!isFocus ? "Select item" : "..."}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
            <AddToCartButton product={undefined} />
        </View>
    );
};

const SubscripptionCustomizationScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SubscriptionTimelineCard />
                <SubscriptionTimelineCard />
                <SubscriptionTimelineCard />
                <SubscriptionTimelineCard />
                <SubscriptionTimelineCard />
                <SubscriptionTimelineCard />
                <SubscriptionTimelineCard />
            </ScrollView>
        </View>
    );
};

export default SubscripptionCustomizationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    dropdown: {
        height: 44,
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: "38%",
        backgroundColor: "#fff",
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
