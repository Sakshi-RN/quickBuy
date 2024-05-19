import {
  HomeScreenHeaderLeft,
  HomeScreenHeaderRight,
} from "../headers/HomeScreenHeaders";
import { ProductsScreenHeaderLeft } from "../headers/ProductsScreenHeader";
import AccountScreen from "../screens/account/AccountScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ProductsScreen from "../screens/products/ProductsScreen";
import { TabNavigationScreenInterface } from "../types/appRoot";

import { AccountIcon, HomeIcon, ProductsIcon } from "./TabBarIcons";

export const HomeTabNavigatorRoutes: TabNavigationScreenInterface[] = [
  {
    options: {
      title: "",
      tabBarIcon: HomeIcon,
      headerLeft: HomeScreenHeaderLeft,
      headerRight: HomeScreenHeaderRight,
      tabBarLabel: "Home",
      tabBarLabelStyle: {
        marginBottom: 5,
        fontSize: 14,
        fontWeight: "600",
      },
    },
    name: "HomeScreen",
    component: HomeScreen,
  },
  {
    options: {
      title: "",
      tabBarIcon: ProductsIcon,
      headerLeft: ProductsScreenHeaderLeft,
      tabBarLabel: "Products",
      tabBarLabelStyle: {
        marginBottom: 5,
        fontSize: 14,
        fontWeight: "600",
      },
    },
    name: "ProductsScreen",
    component: ProductsScreen,
  },
  // {
  //   options: {
  //     title: "",
  //     tabBarIcon: ReferalIcon,
  //     tabBarLabel: "Refer",
  //     tabBarLabelStyle: {
  //       marginBottom: 8,
  //       fontSize: 12,
  //       fontWeight: "600",
  //     },
  //   },
  //   name: "ReferalScreen",
  //   component: ReferalScreen,
  // },
  {
    options: {
      title: "",
      tabBarIcon: AccountIcon,
      tabBarLabel: "Account",
      tabBarLabelStyle: {
        marginBottom: 5,
        fontSize: 14,
        fontWeight: "600",
      },
      headerShown: false,
    },
    name: "AccountScreen",
    component: AccountScreen,
  },
];
