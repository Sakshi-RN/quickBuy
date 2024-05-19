import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { GlobalColors } from "../../theme/GlobalColors";
import { Address } from "../../types/data";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../../types/reducers";
import { setAddress } from "../../store/reducers/CartReducer";

interface AddressCardForModalProps {
    address: Address;
    closeModal: () => void;
}

const AddressCardForModal: React.FC<AddressCardForModalProps> = ({
    address,
    closeModal,
}) => {
    const addressId = useSelector(
        (store: StoreInterface) => store.cart
    ).addressId;
    const dispatch = useDispatch();
    return (
        <Pressable
            onPress={() => {
                dispatch(
                    setAddress({
                        addressId: address._id,
                    })
                );
                closeModal();
            }}
            style={[
                {
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 8,
                    backgroundColor: "#f8f8f8",
                    paddingVertical: 8,
                    borderRadius: 8,
                    borderWidth: 0.5,
                    borderColor: "#c0c0c0",
                    paddingLeft: 12,
                },
                addressId === address?._id && {
                    borderWidth: 2,
                    borderColor: GlobalColors.primaryColor,
                },
            ]}
        >
            <View style={{ marginRight: 16 }}>
                <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color={GlobalColors.primaryColor}
                />
            </View>
            <View style={{ width: "100%" }}>
                <Text style={{ fontWeight: "600", fontSize: 15 }}>
                    {address.city}, {address.state}
                </Text>
                <Text
                    numberOfLines={2}
                    style={{ color: "#898989", marginTop: 4, width: "84%" }}
                >
                    {address.flatPlot}, {address.blockName}, {address.colonyName},{" "}
                    {address.areaName},{address.communityName}, {address.pincode}
                </Text>
            </View>
        </Pressable>
    );
};

export default AddressCardForModal;

const styles = StyleSheet.create({});
