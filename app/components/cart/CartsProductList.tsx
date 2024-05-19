import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartProductCard from './CartProductCard'
import { useSelector } from 'react-redux'
import { StoreInterface } from '../../types/reducers'

const CartsProductList = () => {
    const cartItems = useSelector((store: StoreInterface) => store.cart).products
    return (
        <View>
            {
                cartItems.map((item, index) => (
                    <CartProductCard key={index} isSubscription={false} product={item.product} />
                ))
            }
        </View>
    )
}

export default CartsProductList

const styles = StyleSheet.create({})