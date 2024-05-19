/**

 # ---------------------------------- #
 #        Screen Custom Headers       #
 # ---------------------------------- #

 Here you will implement the all custom headers in the homescreen bottom tab navigations
 there are 5 screens so , you can customize each screen headers here and pass to the options
 in routes definitions .

*/

import * as React from "react";
import {
    View,
    StyleSheet,
    Platform,
    Pressable,
    Image,
    Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { header } from "../types/appRoot";
import { Gstyles } from "../theme/GlobalStyles";
import { Badge } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalColors } from "../theme/GlobalColors";
import logo from "../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { StoreInterface } from "../types/reducers";

export const HomeScreenHeaderLeft: React.FC<header> = () => {
    /**
     * Write or modify you homscreen left-side header hear.
     * Anything changes here will only reflects in the homescreen's
     * headerLeft options ,We are modulating and writing here
     */
    return (
        <View
            style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 16,
            }}
        >
            <View style={{ width: 36, height: 36, marginRight: 8 }}>
                <Image
                    source={logo}
                    style={{ width: "100%", height: "100%", borderRadius: 5 }}
                    resizeMode="cover"
                />
            </View>
            <View>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#202423" }}>
                    Morning Delivery
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "400", color: "#787878" }}>
                    5 am to 7: 30 am
                </Text>
            </View>
        </View>
    );
};

export const HomeScreenHeaderRight: React.FC<header> = () => {
    const navigation = useNavigation();
    const cartitems = useSelector((store: StoreInterface) => store.cart).products
        .length;
    React.useEffect(() => { }, [cartitems]);
    return (
        <View style={HSStyles.searchBarContainer}>
            <Ionicons
                name="search"
                size={24}
                color="black"
                onPress={() => {
                    navigation.navigate("SearchScreen");
                }}
            />
            <Pressable
                onPress={() => {
                    navigation.navigate("CartScreen");
                }}
                style={[Gstyles["xy-center"], Gstyles["mx-6"], { height: 56 }]}
            >
                <Badge
                    size={18}
                    style={[
                        Gstyles.absolute,
                        {
                            top: 4,
                            left: 8,
                            zIndex: 10,
                            backgroundColor: GlobalColors.primaryColor,
                        },
                        Gstyles["font-semibold"],
                    ]}
                >
                    {cartitems}
                </Badge>
                <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
            </Pressable>
        </View>
    );
};

const HSStyles = StyleSheet.create({
    searchBarStyle: {
        width: "80%",
        height: 36,
        borderRadius: 24,
        borderWidth: 0.7,
        borderColor: "#e8e8f8",
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    searchBarContainer: {
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        ...Platform.select({
            ios: {
                width: "170%",
            },
        }),
    },
});
