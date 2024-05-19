import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { GlobalColors } from "../theme/GlobalColors";
import { TabBarIconInterface } from "../types/appRoot";
import { Pressable } from "react-native";

export const HomeIcon: React.FC<TabBarIconInterface> = ({ size, focused }) => {
  return (
    <Ionicons
      name="home"
      size={size}
      color={focused ? GlobalColors.primaryColor : "#787878"}
    />
  );
};

export const ProductsIcon: React.FC<TabBarIconInterface> = ({
  size,
  focused,
}) => {
  return (
    <MaterialCommunityIcons
      name="food-variant"
      size={size}
      color={focused ? GlobalColors.primaryColor : "#787878"}
    />
  );
};

export const ReferalIcon: React.FC<TabBarIconInterface> = ({
  size,
  focused,
}) => {
  return (
    <Feather
      name="play"
      size={size}
      color={focused ? GlobalColors.primaryColor : "#787878"}
    />
  );
};

export const AccountIcon: React.FC<TabBarIconInterface> = ({
  size,
  focused,
}) => {
  return (
    <Pressable>
      <FontAwesome5
        name="user"
        size={size}
        color={focused ? GlobalColors.primaryColor : "#787878"}
      />
    </Pressable>
  );
};
