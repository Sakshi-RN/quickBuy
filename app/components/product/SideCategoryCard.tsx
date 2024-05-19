import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { ProductCategory } from "../../types/data";
import { GlobalColors } from "../../theme/GlobalColors";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../../types/reducers";
import { setCategoryId } from "../../store/reducers/CategoryReducer";

interface SideCategoryCardProps {
    category: ProductCategory;
}

const SideCategoryCard: React.FC<SideCategoryCardProps> = ({ category }) => {
    const activeCategory = useSelector(
        (store: StoreInterface) => store.category
    ).activeCategoryId;
    const dispatch = useDispatch();
    useEffect(() => { }, [activeCategory]);
    return (
        <Pressable
            style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fffffc",
                zIndex: 10,
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    dispatch(
                        setCategoryId({
                            name: category.name[0],
                            id: category._id,
                        })
                    );
                }}
                style={styles.alignmentProducts}
            >
                <Image src={category.imgURL[0]} style={styles.Products} />
                <Text numberOfLines={2} style={styles.productItem}>
                    {category.name}
                </Text>
            </TouchableOpacity>
            {category._id === activeCategory && (
                <View
                    style={{
                        width: 4,
                        height: "60%",
                        backgroundColor: GlobalColors.primaryColor,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                    }}
                ></View>
            )}
        </Pressable>
    );
};

export default SideCategoryCard;

const styles = StyleSheet.create({
    alignmentProducts: {
        alignItems: "center",
        backgroundColor: "#fffffc",
        paddingVertical: 5,
        width: "96%",
    },
    productItem: {
        fontSize: 11,
        textAlign: "center",
        marginTop: 1,
        width: 30,
        fontWeight: "600",
        color: "gray",
    },
    Products: {
        width: 44,
        height: 44,
        borderRadius: 20,
        marginTop: 10,
    },
});
