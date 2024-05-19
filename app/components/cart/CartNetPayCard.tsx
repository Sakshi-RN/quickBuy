import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GlobalColors } from '../../theme/GlobalColors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StoreInterface } from '../../types/reducers';

const CartNetPayCard = () => {
    const navigation = useNavigation()
    const amountToPay = useSelector(
        (store: StoreInterface) => store.cart
    ).netPayable;
    useEffect(() => {

    }, [amountToPay])
    return (
        <View style={styles.placeOrdContainer}>
            <View>
                <Text
                    style={{
                        fontWeight: "900",
                        fontSize: 24,
                        color: GlobalColors.secondaryBlack,
                    }}
                >
                    ₹ {amountToPay.toFixed(2)}
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 12.5, color: "#989898" }}>
                    Net Pay
                </Text>
            </View>
            <Pressable
                onPress={() => {
                    navigation.navigate("OrderPlacingScreen");
                }}
                style={styles.checkoutWrapper}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "600",
                        letterSpacing: 0.7,
                    }}
                >
                    Place Order
                </Text>
            </Pressable>
        </View>
    )
}

export default CartNetPayCard

const styles = StyleSheet.create({
    checkoutWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalColors.primaryColor,
        borderRadius: 6,
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    placeOrdContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
})