import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import AccountInfoCard from "../../components/account/AccountInfoCard";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuListItemCard from "../../components/account/MenuListItemCard";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AddressSelectionModal from "../../components/common/AddressSelectionModal";

const AccountScreen = () => {
  const navigation = useNavigation();
  const [toggleAddress, setToggleAddress] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f4f8" }}>
      <ScrollView
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
      >
        <AccountInfoCard />
        <MenuListItemCard
          renderIcon={() => (
            <FontAwesome5 name="user" size={18} color="black" />
          )}
          label={"Your Profile"}
          onClick={() => {
            navigation.navigate("ProfileScreen");
          }}
        />
        <MenuListItemCard
          renderIcon={() => <Feather name="package" size={18} color="black" />}
          label={"My Orders"}
          onClick={() => {
            navigation.navigate("OrdersHistoryListScreen");
          }}
        />
        <MenuListItemCard
          renderIcon={() => <FontAwesome5 name="map" size={18} color="black" />}
          label={"Saved Address"}
          onClick={() => {
            setToggleAddress(true);
          }}
        />
        <MenuListItemCard
          renderIcon={() => (
            <Ionicons name="help-circle-outline" size={24} color="black" />
          )}
          label={"Need a help"}
          onClick={() => {
            navigation.navigate("CustomerSupportScreen");
          }}
        />
      </ScrollView>
      {toggleAddress && (
        <AddressSelectionModal
          closeModal={() => setToggleAddress(false)}
          toggled={toggleAddress}
        />
      )}
    </SafeAreaView>
  );
};

export default AccountScreen;

