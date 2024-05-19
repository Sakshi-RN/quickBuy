/*

 # ---------------------------------- #
 #        Screen Custom Headers       #
 # ---------------------------------- #

 Here you will implement the all custom headers in the homescreen bottom tab navigations
 there are 5 screens so , you can customize each screen headers here and pass to the options
 in routes definitions

*/

import { Feather } from '@expo/vector-icons';

import * as React from "react";
import { View, Text } from "react-native";
import { header } from "../types/appRoot";
import { useSelector } from "react-redux";
import { StoreInterface } from "../types/reducers";

export const OrderHistoryScreenHeaderLeft: React.FC<header> = () => {
    const order = useSelector((store: StoreInterface) => store.order);
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
            <View>
                <Feather name="arrow-left" size={24} color="black" />
            </View>
            <View style={{ marginHorizontal: 16 }}>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>ID {order.orderID}</Text>
                <Text style={{ fontSize: 13, color: "#989898" }}>{order.orderPlaced}</Text>
            </View>
        </View>

    );
};
