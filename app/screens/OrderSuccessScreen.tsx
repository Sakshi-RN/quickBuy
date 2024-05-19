import { StyleSheet, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalColors } from "../theme/GlobalColors";
import { useNavigation } from "@react-navigation/native";

const OrderSuccessScreen = () => {
    const animationRef = useRef<LottieView>(null);
    const navigation = useNavigation();

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current.play(0, 1000);
        }
    }, []);

    useEffect(() => {
        // Set a timeout to navigate to the home screen after a delay
        const timer = setTimeout(() => {
            // Reset the navigation stack to ensure the back button on the home screen does not navigate back
            navigation.reset({
                index: 0,
                routes: [{ name: "HomeScreen" }], // Replace 'HomeScreen' with the actual name of your home screen
            });
            navigation.navigate("HomeScreen");
        }, 4500); // 3-5 seconds delay

        // Cleanup function to clear the timeout if the component unmounts before the timeout completes
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fcfcfc",
            }}
        >
            <LottieView
                ref={animationRef}
                source={require("../assets/animations/SuccessAnimLottie.json")}
                autoPlay={false}
                loop={false}
                style={styles.animation}
            />
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: "600",
                    color: GlobalColors.primaryColor,
                }}
            >
                Order Placed!
            </Text>
        </SafeAreaView>
    );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
    animation: {
        height: SCREEN_HEIGHT * 0.4,
        width: SCREEN_WIDTH * 0.9,
    },
});
