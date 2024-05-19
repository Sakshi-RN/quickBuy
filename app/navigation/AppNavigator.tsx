import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigator from "./HomeNavigator";
import ProductDescriptionScreen from "../screens/products/ProductDescriptionScreen";
import SubscripptionCustomizationScreen from "../screens/products/SubscripptionCustomizationScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import CouponScreen from "../screens/CouponScreen";
import AddressFormScreen from "../screens/address/AddressFormScreen";
import OrdersHistoryListScreen from "../screens/OrdersHistoryListScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import OTPVerifyScreen from "../screens/authentication/OTPVerifyScreen";
import { useSelector } from "react-redux";
import { StoreInterface } from "../types/reducers";
import OrderPlacingScreen from "../screens/OrderPlacingScreen";
import VacationScreen from "../screens/VacationScreen";
import { OrderHistoryScreenHeaderLeft } from "../headers/OrderHistoryScreenHeaders";
import CustomerSupportScreen from "../screens/CustomerSupportScreen";
import OrderSuccessScreen from "../screens/OrderSuccessScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const isLoggedIn = useSelector(
    (store: StoreInterface) => store.auth
  ).isLoggedIn;
  return (
    <>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "SignUpScreen" : "BottomTabs"}
      >
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="SignUpScreen"
              options={{ title: "" }}
              component={SignUpScreen}
            />
            <Stack.Screen
              name="LoginScreen"
              options={{ title: "" }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="OTPVerifyScreen"
              options={{ title: "" }}
              component={OTPVerifyScreen}
            />
          </>
        ) : (
          <Stack.Screen
            name="BottomTabs"
            options={{ headerShown: false }}
            component={HomeNavigator}
          />
        )}
        <Stack.Screen
          name="ProductDescriptionScreen"
          options={{
            title: "",
          }}
          component={ProductDescriptionScreen}
        />
        <Stack.Screen
          name="SubscripptionCustomizationScreen"
          options={{
            title: "Customize Your Subscription",
          }}
          component={SubscripptionCustomizationScreen}
        />
        <Stack.Screen
          name="SearchScreen"
          options={{
            title: "",
            headerShown: false,
          }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="CartScreen"
          options={{
            title: "",
          }}
          component={CartScreen}
        />
        <Stack.Screen
          name="CouponScreen"
          options={{
            title: "",
            headerShown: false,
          }}
          component={CouponScreen}
        />
        <Stack.Screen
          name="AddressFormScreen"
          options={{
            title: "Delivery Address",
          }}
          component={AddressFormScreen}
        />
        <Stack.Screen
          name="OrdersHistoryListScreen"
          options={{
            title: "Order History",
          }}
          component={OrdersHistoryListScreen}
        />
        <Stack.Screen
          name="OrderHistoryScreen"
          options={{
            title: "",
            headerLeft: OrderHistoryScreenHeaderLeft,
          }}
          component={OrderHistoryScreen}
        />
        <Stack.Screen
          name="OrderPlacingScreen"
          options={{
            title: "",
            headerShown: false,
          }}
          component={OrderPlacingScreen}
        />
        <Stack.Screen
          name="VacationScreen"
          options={{
            title: "Vacation Mode",
          }}
          component={VacationScreen}
        />
        <Stack.Screen
          name="CustomerSupportScreen"
          options={{
            title: "Get Help",
          }}
          component={CustomerSupportScreen}
        />
        <Stack.Screen
          name="OrderSuccessScreen"
          options={{
            title: "",
            headerShown: false,
          }}
          component={OrderSuccessScreen}
        />
        <Stack.Screen
          name="ProfileScreen"
          options={{
            title: "Profile",
          }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
