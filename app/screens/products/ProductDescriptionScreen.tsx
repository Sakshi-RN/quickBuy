import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
} from "react-native";
import AddToCartButton from "../../components/common/AddToCartButton";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { Product } from "../../types/data";
import { AxiosGetProductByIdAsync } from "../../services/ProductsApi";
import { GlobalColors } from "../../theme/GlobalColors";

const ProductDescriptionScreen = (props: any) => {
    const productId = props.route.params.productId;
    const [productData, setProductData] = useState<Product>();
    const handleFetchDataAction = async () => {
        const response = await AxiosGetProductByIdAsync(productId);
        setProductData(response.data);
    };
    useEffect(() => {
        handleFetchDataAction();
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    {productData?.images[0] ? (
                        <Image
                            source={{ uri: productData.images[0] }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    ) : (
                        <ActivityIndicator size="large" color={GlobalColors.primaryColor} />
                    )}
                </View>
                <View style={styles.productDescWrapper}>
                    <View style={styles.content}>
                        <View>
                            <Text style={styles.name}>{productData?.name}</Text>
                            <Text style={styles.text}>{productData?.quantity} ml</Text>
                            <Text style={styles.price}>
                                {"\u20B9"}
                                {productData?.price}
                            </Text>
                            <Text style={styles.textLine}>
                                {"\u20B9"}
                                {productData?.mrp}
                            </Text>
                        </View>
                        <View style={styles.actionButtons}>
                            <AddToCartButton product={productData} />
                        </View>
                    </View>
                    <View></View>
                    {/* <SubscriptionSelectionConatiner
                        toggleStartDate={setToggleStartDate}
                        date={startDate.toDateString()}
                    /> */}
                    <View>
                        <Text style={styles.descTitle}>Product Description</Text>
                        <Text style={styles.descText}>
                            Indulge in the golden goodness of our pure cow ghee, a treasure of
                            tradition and taste. Crafted with care from the freshest milk, our
                            ghee boasts unmatched purity and rich, nutty flavor. Elevate your
                            culinary creations with this luscious, aromatic elixir, and savor
                            the authentic essence of India's culinary heritage in every
                            spoonful.
                        </Text>
                    </View>
                </View>
            </ScrollView>
            {/* {toggleStartDate && (
                <DeliveryDateSelectionModal
                    date={startDate}
                    setDate={setStateDate}
                    closeModal={handleToggleStartModal}
                />
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    imageContainer: {
        width: SCREEN_WIDTH * 1.0,
        height: SCREEN_HEIGHT * 0.4,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    productDescWrapper: {
        paddingHorizontal: 16,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingTop: 20,
    },
    name: {
        fontSize: 16,
        fontWeight: "500",
    },
    text: {
        color: "gray",
        fontWeight: "400",
        marginLeft: 4,
    },
    price: {
        paddingTop: 20,
        fontWeight: "700",
        fontSize: 16,
    },
    textLine: {
        textDecorationLine: "line-through",
        color: "gray",
    },
    descTitle: {
        fontSize: 15,
        fontWeight: "600",
        marginVertical: 8,
    },
    descText: {
        color: "gray",
    },
    actionButtons: {
        flexDirection: "column",
    },
});

export default ProductDescriptionScreen;
