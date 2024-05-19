import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SCREEN_HEIGHT } from "../../../constants";
import { GlobalColors } from "../../../theme/GlobalColors";
import Modal from "react-native-modal/dist/modal";
import { Dropdown } from "react-native-element-dropdown";

interface AccountUpdateNameModalProps {
    onClick: () => void
}

const data = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
];

const AccountGenderModal: React.FC<AccountUpdateNameModalProps> = ({ onClick }) => {
    const [isModalVisible, setModalVisible] = useState(true);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setTimeout(() => {
            onClick()
        }, 400)
    };
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View>
            <Modal
                style={styles.bottomSheet}
                isVisible={isModalVisible}
                animationInTiming={300}
                animationOutTiming={300}
                backdropTransitionInTiming={300}
                backdropTransitionOutTiming={300}
                useNativeDriver={true}
                useNativeDriverForBackdrop={true}
                animationIn={"slideInUp"}
                animationOut={"slideOutDown"}
                backdropOpacity={0.2}
                onBackdropPress={toggleModal}
            >
                <View
                    style={{
                        minHeight: SCREEN_HEIGHT * 0.3,
                        backgroundColor: "#fcfcfc",
                        borderTopStartRadius: 32,
                        borderTopEndRadius: 32,
                        paddingHorizontal: 16,
                        paddingVertical: 16,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "700",
                            marginTop: 16,
                            color: "#797979",
                        }}
                    >
                        Enter Email
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
                    <Pressable
                        style={[
                            {
                                width: "100%",
                                backgroundColor: GlobalColors.primaryColor + "60",
                                paddingVertical: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 8,
                                marginTop: 32,
                            },
                            false && {
                                backgroundColor: GlobalColors.primaryColor,
                            },
                        ]}
                    >
                        <Text style={{ fontSize: 17, color: "#fcfcfc", fontWeight: "500" }}>
                            Save
                        </Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
};

export default AccountGenderModal;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    bottomSheet: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        margin: 0,
        zIndex: 5,
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
