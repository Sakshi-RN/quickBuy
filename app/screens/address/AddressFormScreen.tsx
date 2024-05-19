import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Pressable,
    Text,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { GlobalColors } from "../../theme/GlobalColors";
import { AxiosCreateAddressAsync } from "../../services/AddressApi";
import { useNavigation } from "@react-navigation/native";
import { AddressAddedToast } from "../../components/common/Toasts";

// Define the type for the address fields
type AddressFields = {
    flatPlot: string;
    blockName: string;
    communityName: string;
    colonyName: string;
    areaName: string;
    pincode: string;
    state: string;
    city: string;
};

const AddressFormScreen: React.FC = () => {
    // Initialize state for each field
    const [address, setAddress] = useState<AddressFields>({
        flatPlot: "",
        blockName: "",
        communityName: "",
        colonyName: "",
        areaName: "",
        pincode: "",
        state: "",
        city: "",
    });
    const navigation = useNavigation()
    // Function to handle input changes
    const handleInputChange = (name: keyof AddressFields, value: string) => {
        setAddress((prev) => ({ ...prev, [name]: value }));
    };

    // Define the fields for the address form
    const fields = [
        { name: "flatPlot", placeholder: "Flat/Plot" },
        { name: "blockName", placeholder: "Block Name / Building / Apartment Name" },
        { name: "communityName", placeholder: "Community Name / Street Name" },
        { name: "colonyName", placeholder: "Colony Name / Location Name" },
        { name: "areaName", placeholder: "Area Name" },
        { name: "pincode", placeholder: "Pincode" },
        { name: "state", placeholder: "State" },
        { name: "city", placeholder: "City / Town Name" },
    ];

    const handleSubmitForm = async () => {
        const response = await AxiosCreateAddressAsync(address)
        console.log(response);
        if (response.status === "1") {
            AddressAddedToast()
            navigation.goBack()
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.formContainer}>
                {fields.map((field) => (
                    <TextInput
                        key={field.name}
                        style={styles.inputElement}
                        placeholderTextColor={"#a0a0a0"}
                        placeholder={field.placeholder}
                        value={address[field.name as keyof AddressFields]}
                        onChangeText={(value: string) =>
                            handleInputChange(field.name as keyof AddressFields, value)
                        }
                    />
                ))}
                <Pressable
                    onPress={handleSubmitForm}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        marginVertical: 16,
                        backgroundColor: GlobalColors.primaryColor,
                        width: "100%",
                        paddingVertical: 8,
                        alignItems: "center",
                        borderRadius: 8,
                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>
                        Add New Address
                    </Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    formContainer: {
        width: "100%",
        height: "100%",
    },
    inputElement: {
        width: "100%",
        backgroundColor: "#f4f4f4",
        height: 56,
        marginVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
});

export default AddressFormScreen;
