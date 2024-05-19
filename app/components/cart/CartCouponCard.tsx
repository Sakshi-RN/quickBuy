import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalColors } from '../../theme/GlobalColors';
import DashedLine from 'react-native-dashed-line';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { StoreInterface } from '../../types/reducers';
import { setCoupon } from '../../store/reducers/CartReducer';

const CartCouponCard = () => {
    const couponApplied = useSelector((store: StoreInterface) => store.cart.couponId);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleRemoveCoupon = useCallback(() => {
        dispatch(setCoupon({ couponId: '' }));
    }, [dispatch]);

    const handleNavigateToCouponScreen = useCallback(() => {
        navigation.navigate('CouponScreen');
    }, [navigation]);

    return (
        <>
            {couponApplied !== '' ? (
                <View style={styles.cardContent}>
                    <View style={styles.containerOne}>
                        <View style={styles.containerThree}>
                            <View style={styles.offerAppTextWrapper}>
                                <Text style={styles.saveText}>
                                    You saved {"\u20B9"}
                                    {100} with this code
                                </Text>
                                <Text style={styles.couponAppliedText}>
                                    Coupon applied
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={handleRemoveCoupon}>
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    <DashedLine
                        style={styles.dashedLine}
                        dashColor="#d4d4d4"
                        dashLength={6}
                        dashGap={4}
                        dashThickness={1}
                    />
                    <TouchableOpacity onPress={handleNavigateToCouponScreen} style={styles.viewAllCoupons}>
                        <Text>View all coupons</Text>
                        <Entypo name="chevron-right" size={20} color={GlobalColors.primaryColor} />
                    </TouchableOpacity>
                </View>
            ) : (
                <Pressable onPress={handleNavigateToCouponScreen} style={styles.cardContent}>
                    <View style={styles.containerOne}>
                        <View style={styles.availOffersContainer}>
                            <MaterialCommunityIcons name="brightness-percent" size={24} color="black" />
                            <Text style={styles.availText}>Avail Offers / Coupons</Text>
                        </View>
                        <View style={styles.chevronContainer}>
                            <Entypo name="chevron-right" size={24} color={GlobalColors.primaryColor} />
                        </View>
                    </View>
                </Pressable>
            )}
        </>
    );
};

export default React.memo(CartCouponCard);

const styles = StyleSheet.create({
    cardContent: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#d8d8d8',
        marginVertical: 4,
    },
    containerOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerThree: {
        flexDirection: 'row',
    },
    offerAppTextWrapper: {
        marginLeft: 8,
    },
    saveText: {
        fontWeight: '500',
    },
    couponAppliedText: {
        color: GlobalColors.primaryColor,
    },
    removeText: {
        color: 'red',
    },
    dashedLine: {
        marginVertical: 12,
        width: '100%',
    },
    viewAllCoupons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    availOffersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    availText: {
        marginLeft: 15,
        fontWeight: '500',
        fontSize: 14,
    },
    chevronContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});
