import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal/dist/modal";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { GlobalColors } from "../../theme/GlobalColors";

interface DeliveryDateSelectionModalProps {
    date: Date;
    setDate: (value: Date) => void;
    closeModal: () => void;
}

const DeliveryDateSelectionModal: React.FC<DeliveryDateSelectionModalProps> = ({
    date,
    setDate,
    closeModal,
}) => {
    const [isModalVisible, setModalVisible] = useState(true);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setTimeout(() => {
            closeModal();
        }, 300);
    };

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
                animationIn={"slideInLeft"}
                animationOut={"slideOutLeft"}
                backdropOpacity={0.2}
                onBackdropPress={toggleModal}
            >
                <View style={styles.dateWrapper}>
                    <DateTimePicker
                        minDate={new Date()}
                        mode="single"
                        date={date}
                        selectedItemColor={GlobalColors.primaryGreen}
                        onChange={(params) => setDate(dayjs(params.date).toDate())}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default DeliveryDateSelectionModal;

const styles = StyleSheet.create({
    bottomSheet: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        top: 0,
        margin: 0,
        zIndex: 5,
    },
    dateWrapper: {
        backgroundColor: "white",
        marginHorizontal: 32,
        marginVertical: 32,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
});
