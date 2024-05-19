import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import DeliveryDateSelectionModal from "../components/common/DeliveryDateSelectionModal";
import { GlobalColors } from "../theme/GlobalColors";

const VacationScreen = () => {
    const [startDate, setStartDate] = useState(dayjs().toDate());
    const [endDate, setEndDate] = useState(dayjs().add(2, "day").toDate()); // Assuming a default end date 7 days from start
    const [toggleStartDate, setToggleStartDate] = useState(false);
    const [toggleEndDate, setToggleEndDate] = useState(false); // New state for endDate

    const handleToggleStartModal = () => {
        setToggleStartDate(!toggleStartDate);
    };

    const handleToggleEndModal = () => {
        setToggleEndDate(!toggleEndDate);
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fcfcfc",
                paddingHorizontal: 16,
                paddingVertical: 16,
            }}
        >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Set Your Vacation
            </Text>
            <Text style={{ color: "#898989", marginVertical: 8, marginLeft: 5 }}>
                You can set vacation mode, where we will cancel deliveries on your
                vacation period.
            </Text>
            <View style={{ width: "100%", flexDirection: "row", marginVertical: 8 }}>
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <Text style={{ fontWeight: "700" }}>Start Date</Text>
                    <Pressable
                        onPress={handleToggleStartModal} // Updated to toggle the startDate modal
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
                        <Text style={{ fontWeight: "600" }}>
                            {startDate.toDateString()}
                        </Text>
                        <MaterialIcons
                            name="edit"
                            size={14}
                            color="black"
                            style={{ marginLeft: 4 }}
                        />
                    </Pressable>
                </View>
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <Text style={{ fontWeight: "700" }}>End Date</Text>
                    <Pressable
                        onPress={handleToggleEndModal} // New function to toggle the endDate modal
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
                        <Text style={{ fontWeight: "600" }}>{endDate.toDateString()}</Text>
                        <MaterialIcons
                            name="edit"
                            size={14}
                            color="black"
                            style={{ marginLeft: 4 }}
                        />
                    </Pressable>
                </View>
            </View>
            <Pressable
                style={[
                    {
                        width: "100%",
                        backgroundColor: GlobalColors.primaryColor + "60",
                        paddingVertical: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 8,
                    },
                    true && {
                        backgroundColor: GlobalColors.primaryColor,
                    },
                ]}
            >
                <Text style={{ fontSize: 15, color: "#fcfcfc", fontWeight: "500" }}>
                    Confirm Vacation
                </Text>
            </Pressable>
            {toggleStartDate && (
                <DeliveryDateSelectionModal
                    date={startDate}
                    setDate={setStartDate}
                    closeModal={handleToggleStartModal}
                />
            )}
            {toggleEndDate && (
                <DeliveryDateSelectionModal
                    date={endDate}
                    setDate={setEndDate}
                    closeModal={handleToggleEndModal}
                />
            )}
        </View>
    );
};

export default VacationScreen;

const styles = StyleSheet.create({});
