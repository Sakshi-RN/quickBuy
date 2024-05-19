/**
           ⚠️⚠️⚠️ Warning ⚠️⚠️⚠️
   # ------------------------------------- #
   #       Do Not Change this Content      #
   #                  or                   #
   #           Remove this file            #
   # ------------------------------------- #

   Global Interfaces and Params ,removing these crashes the app .
*/

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ComponentType } from "react";

export type AppRootParamList = {
  /**
   * When ever you add new screen add params here .
   */
  HomeScreen: undefined;
  ProductsScreen: undefined;
  // ReferalScreen: undefined;
  AccountScreen: undefined;
  ProductDescriptionScreen: { productId: string };
  SubscripptionCustomizationScreen: undefined;
  SearchScreen: undefined;
  CartScreen: undefined;
  CouponScreen: undefined;
  AddressFormScreen: undefined;
  OrdersHistoryListScreen: undefined;
  OrderHistoryScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  OTPVerifyScreen: undefined;
  OrderPlacingScreen: undefined;
  VacationScreen: undefined;
  CustomerSupportScreen: undefined;
  OrderSuccessScreen: undefined;
  ProfileScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}

export interface TabNavigationScreenInterface {
  options: BottomTabNavigationOptions;
  name: string;
  component: ComponentType;
}

export interface TabBarIconInterface {
  size: number;
  focused: boolean;
  color?: string;
}

export type header = {
  tintColor?: string | undefined;
  pressColor?: string | undefined;
  pressOpacity?: number | undefined;
  labelVisible?: boolean | undefined;
};
