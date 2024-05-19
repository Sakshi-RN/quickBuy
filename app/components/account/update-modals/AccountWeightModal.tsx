import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SCREEN_HEIGHT } from "../../../constants";
import { GlobalColors } from "../../../theme/GlobalColors";
import Modal from "react-native-modal/dist/modal";

interface AccountUpdateNameModalProps {
    onClick: () => void
}

const AccountWeightModal: React.FC<AccountUpdateNameModalProps> = ({ onClick }) => {
    const [isModalVisible, setModalVisible] = useState(true);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setTimeout(() => {
            onClick()
        }, 400)
    };
    const [weight, setWeigh] = useState("");
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
                        Enter Weight
                    </Text>
                    <TextInput
                        style={{
                            backgroundColor: "#f0f0f0",
                            width: "100%",
                            height: 48,
                            marginTop: 16,
                            borderRadius: 8,
                            paddingHorizontal: 16,
                            fontSize: 17,
                            fontWeight: "600",
                        }}
                        placeholder="Enter Alternate Number"
                        placeholderTextColor={"#a0a0a0"}
                        keyboardType="phone-pad"
                        value={weight}
                        onChangeText={setWeigh}
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

export default AccountWeightModal;

const styles = StyleSheet.create({
    bottomSheet: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        margin: 0,
        zIndex: 5,
    },
});
