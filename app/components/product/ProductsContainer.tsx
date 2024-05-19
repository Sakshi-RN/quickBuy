import { FlatList, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductHCard from './ProductHCard'
import { StoreInterface } from '../../types/reducers'
import { useSelector } from 'react-redux'
import { Product } from '../../types/data'
import { AxiosGetAllProductByCategoryAsync } from '../../services/ProductsApi'
import { SCREEN_HEIGHT } from '../../constants'

const ProductsContainer = () => {
    const categoryName = useSelector((store: StoreInterface) => store.category)
    const [productsData, setProductsData] = useState<Product[]>([]);

    const handleFetchProductsAction = async () => {
        const response = await AxiosGetAllProductByCategoryAsync(categoryName.activeCategoryId)
        setProductsData(response.data);
    };
    useEffect(() => {
        handleFetchProductsAction();
    }, [categoryName.activeCategoryId]);
    return (
        <FlatList
            data={productsData}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Text style={{ marginHorizontal: 10, marginTop: 16, fontSize: 15, fontWeight: '600' }}>Buy Fresh {categoryName.name}</Text>}
            renderItem={({ item }) => <ProductHCard product={item} />}
            keyExtractor={(item) => item._id}
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingBottom: SCREEN_HEIGHT * 0.12 }}
        />
    )
}

export default ProductsContainer

const styles = StyleSheet.create({})