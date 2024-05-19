/*

 # ---------------------------------- #
 #        Screen Custom Headers       #
 # ---------------------------------- #

 Here you will implement the all custom headers in the homescreen bottom tab navigations
 there are 5 screens so , you can customize each screen headers here and pass to the options
 in routes definitions

*/
import * as React from "react";
import { View, Text } from "react-native";
import { header } from "../types/appRoot";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export const ProductsScreenHeaderLeft: React.FC<header> = () => {
    /**
     * Write or modify you homscreen left-side header hear.
     * Anything changes here will only reflects in the homescreen's
     * headerLeft options ,We are modulating and writing here
     */
    // Get current date and time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Calculate delivery date
    let deliveryDate = new Date();
    if (currentHour < 22 || (currentHour === 22 && currentMinute < 30)) {
        // If current time is before 10:30 PM, delivery date is tomorrow
        deliveryDate.setDate(deliveryDate.getDate() + 1);
    } else {
        // If current time is 10:30 PM or later, delivery date is day after tomorrow
        deliveryDate.setDate(deliveryDate.getDate() + 2);
    }

    // Format delivery date
    const formattedDeliveryDate = deliveryDate.toDateString();
    const navigation = useNavigation();
    return (
        <View
            style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 16,
            }}
        >
            <View>
                <AntDesign
                    onPress={() => {
                        navigation.goBack();
                    }}
                    name="arrowleft"
                    size={24}
                    color="#787878"
                />
            </View>
            <View style={{ width: "90%", marginLeft: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#202423" }}>
                    Morning Delivery
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 12, fontWeight: "400", color: "#787878" }}>
                        Delivery on
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: "#202423",
                            marginHorizontal: 5,
                        }}
                    >
                        {formattedDeliveryDate}
                    </Text>
                </View>
            </View>
        </View>
    );
};

// export const ProductsScreenHeaderRight: React.FC<header> = () => {
//     const navigation = useNavigation();
//     const cartitems = useSelector((store: StoreInterface) => store.cart).products
//         .length;
//     return (
//         <Pressable
//             onPress={() => {
//                 navigation.navigate("CartScreen");
//             }}
//             style={[Gstyles["xy-center"], Gstyles["mx-6"], { height: 56 }]}
//         >
//             <Badge
//                 size={18}
//                 style={[
//                     Gstyles.absolute,
//                     {
//                         top: 4,
//                         left: 8,
//                         zIndex: 10,
//                         backgroundColor: GlobalColors.primaryColor,
//                     },
//                     Gstyles["font-semibold"],
//                 ]}
//             >
//                 {cartitems}
//             </Badge>
//             <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
//         </Pressable>
//     );
// };
