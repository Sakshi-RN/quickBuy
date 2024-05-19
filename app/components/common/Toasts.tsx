import Toast from "react-native-toast-message";
import { SCREEN_HEIGHT } from "../../constants";

export const AddressAddedToast = () => {
  return Toast.show({
    type: "success",
    text1: "Address Added",
    position: "top",
    topOffset: SCREEN_HEIGHT * 0.12,
    visibilityTime: 2000,
    autoHide: true,
    onPress: () => Toast.hide(),
  });
};
