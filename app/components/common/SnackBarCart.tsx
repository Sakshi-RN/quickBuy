import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GlobalColors } from '../../theme/GlobalColors';
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StoreInterface } from '../../types/reducers';

const SnackBarCart = () => {
    const [visible, setVisible] = React.useState(false);
    const onDismissSnackBar = () => { };
    const navigation = useNavigation();
    const cart = useSelector((store: StoreInterface) => store.cart);
    const totalItems = cart.products.length
    useEffect(() => {
        if (cart.products.length > 0) {
            setVisible(true); // Show the Snackbar when items are added to the cart
        }
        else {
            setVisible(false)
        }
    }, [cart.products]);

    return (
        <Snackbar
            visible={visible}
            style={styles.snackBarContainer}
            onDismiss={onDismissSnackBar}
            action={{
                label: "View Cart",
                onPress: () => {
                    navigation.navigate("CartScreen");
                },
                labelStyle: { fontSize: 16, color: "white" },
            }}
        >
            <View style={styles.detailsContainer}>
                <View style={styles.itemsWrapper}>
                    <Text style={styles.text}>
                        {totalItems === 1 ? "1 Item" : `${totalItems} Items`}
                    </Text>
                </View>
                <View style={styles.chargesWrapper}>
                    <Text style={styles.textOne}>Total Items</Text>
                </View>
            </View>
        </Snackbar>
    )
}

export default SnackBarCart

const styles = StyleSheet.create({
    snackBarContainer: {
        height: 64,
        width: "96%",
        backgroundColor: GlobalColors.primaryColor,
        borderRadius: 8,
    },
    detailsContainer: {
        marginLeft: 4,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
    dividerVLine: {
        width: 2,
        height: "80%",
        backgroundColor: "white",
        marginHorizontal: 8,
    },
    itemsWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    chargesWrapper: {},
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    textOne: {
        color: "white",
        fontSize: 12,
    },
});
