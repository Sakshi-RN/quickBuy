import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabNavigatorRoutes } from "./routes";
import { GlobalColors } from "../theme/GlobalColors";

const Tab = createBottomTabNavigator();

const HomeNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={() => ({
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 64,
                },
                tabBarIconStyle: {
                    color: GlobalColors.primaryColor,
                },
                tabBarActiveTintColor: GlobalColors.primaryColor

            })}
        >
            {HomeTabNavigatorRoutes.map((item, index) => {
                const { options, name, component } = item;
                return (
                    <Tab.Screen
                        key={index}
                        name={name}
                        component={component}
                        options={options}
                    />
                );
            })}
        </Tab.Navigator>
    );
};

export default HomeNavigator;
