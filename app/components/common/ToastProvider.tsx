import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
import { GlobalColors } from "../../theme/GlobalColors";

const ToastProvider: React.FC = () => {
    const toastConfig = {
        success: ({ text1 }: any) => (
            <View style={[styles.toast, styles.success]}>
                <Text style={styles.toastText}>{text1}</Text>
            </View>
        ),
        error: ({ text1 }: any) => (
            <View style={[styles.toast, styles.error]}>
                <Text style={styles.toastText}>{text1}</Text>
            </View>
        ),
        info: ({ text1 }: any) => (
            <View style={[styles.toast, styles.info]}>
                <Text style={styles.toastText}>{text1}</Text>
            </View>
        ),
    };
    return <Toast config={toastConfig} />;
};

export default ToastProvider;

const styles = StyleSheet.create({
    toast: {
        backgroundColor: GlobalColors.secondaryBlack,
        paddingVertical: 8,
        borderRadius: 5,
        paddingHorizontal: 16,
        width: "auto",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 30
    },
    toastText: {
        color: "white",
        fontSize: 14,
        textAlign: "center",
        fontWeight: "500",
        textTransform: 'capitalize'
    },
    success: {
        backgroundColor: GlobalColors.secondaryBlack,
    },
    successToastIcon: {
        backgroundColor: "white",
        marginHorizontal: 8,
        borderRadius: 16,
        padding: 0,
        margin: 0,
    },
    error: {
        backgroundColor: "#dc3545",
    },
    info: {
        backgroundColor: "#121212",
    },
});
