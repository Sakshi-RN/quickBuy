import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal/dist/modal";
import { SCREEN_HEIGHT } from "../../constants";
import AddressCardForModal from "../address/AddressCardForModal";
import { GlobalColors } from "../../theme/GlobalColors";
import { AxiosGetAllAddressesAsync } from "../../services/AddressApi";
import { Address } from "../../types/data";
import { useNavigation } from "@react-navigation/native";

interface AddressSelectionModalProps {
    closeModal: () => void;
    toggled: boolean;
}

const AddressSelectionModal: React.FC<AddressSelectionModalProps> = ({
    closeModal,
    toggled
}) => {
    const [isModalVisible, setModalVisible] = useState(toggled);
    const navigation = useNavigation();
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setTimeout(() => {
            closeModal();
        }, 350);
    };
    const [addressData, setAddressData] = useState<Address[]>([]);
    const handleFetchAddressActions = async () => {
        const response = await AxiosGetAllAddressesAsync();
        setAddressData(response.data);
    };
    useEffect(() => {
        handleFetchAddressActions();
    }, []);
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
                backdropOpacity={0.1}
                onBackdropPress={toggleModal}
            >
                <View style={styles.modalWrapper}>
                    <View style={{ width: "100%" }}>
                        <Text
                            style={{ fontSize: 16, fontWeight: "600", marginVertical: 8 }}
                        >
                            Delivery Address
                        </Text>
                        {addressData.length !== 0 && addressData.map((item, index) => {
                            return <AddressCardForModal key={index} address={item} closeModal={toggleModal} />
                        })}
                    </View>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("AddressFormScreen");
                        }}
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
            </Modal>
        </View>
    );
};

export default AddressSelectionModal;

const styles = StyleSheet.create({
    bottomSheet: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        margin: 0,
        zIndex: 5,
    },
    modalWrapper: {
        minHeight: SCREEN_HEIGHT * 0.48,
        paddingBottom: 64,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: "center",
    },
});
