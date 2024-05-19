import { StyleSheet, Text, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";
import RazorpayCheckout from "react-native-razorpay";
import {
    ApiFetchPpaymentForCart,
    ApiPlaceOrderFromCart,
} from "../services/CartApi";
import { GlobalColors } from "../theme/GlobalColors";
import { useDispatch } from "react-redux";
import { emptyCart } from "../store/reducers/CartReducer";
import { useNavigation } from "@react-navigation/native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

interface paymentRazorPay {
    id: string;
    entity: string;
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: string;
    receipt: string;
    offer_id: string | null;
    status: string;
    attempts: number;
    notes: {
        cartID: string;
    };
    created_at: number;
}

const OrderPlacingScreen = () => {
    const animationProgress = useRef(new Animated.Value(0));
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const startAnimation = () => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 2600,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(({ finished }) => {
            if (finished) {
                animationProgress.current.setValue(0);
                startAnimation();
            }
        });
    };

    const handlePaymentProcess = async () => {
        const response = await ApiFetchPpaymentForCart();
        console.log(response.data);
        const rzOrder: paymentRazorPay = response.data;
        const options = {
            description: "Placing order for the products",
            image: "https://i.imgur.com/3g7nmJC.jpg",
            currency: "INR",
            key: process.env.EXPO_PUBLIC_RAZAORPAY_KID || "",
            amount: rzOrder.amount,
            name: "My Farmers",
            order_id: rzOrder.id, //Replace this with an order_id created using Orders API.
            prefill: {
                email: "",
                contact: "+910000000000",
                name: "Sakshi Sahu",
            },
            theme: { color: GlobalColors.primaryColor },
        };
        try {
            const response = await RazorpayCheckout.open(options);
            console.log(response);
            const placeOrder = await ApiPlaceOrderFromCart();
            console.log(placeOrder);
            if (placeOrder.status === "1") {
                dispatch(emptyCart());
                navigation.navigate("OrderSuccessScreen");
                // should redirects to order confimation screen
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        startAnimation();
    }, []);

    useEffect(() => {
        handlePaymentProcess();
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 10,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <AnimatedLottieView
                progress={animationProgress.current}
                source={require("../assets/animations/LoadingCirlGreen.json")}
                autoPlay
                loop={true}
                style={styles.animation}
            />
            <Text style={{ fontSize: 20, marginTop: 16, fontWeight: "700" }}>
                Placing Your Order...
            </Text>
            <Text style={{ position: "absolute", bottom: 24, color: "#898989" }}>
                Do not Exit , while processing
            </Text>
        </SafeAreaView>
    );
};

export default OrderPlacingScreen;

const styles = StyleSheet.create({
    animation: {
        height: SCREEN_HEIGHT * 0.36,
        width: SCREEN_WIDTH * 0.8,
    },
});
