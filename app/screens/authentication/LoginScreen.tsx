import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { GlobalColors } from "../../theme/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import { AxiosLoginUserAsync } from "../../services/AuthApi";
import { setPhoneNumber } from "../../store/reducers/AuthReducer";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handleLoginAction = async () => {
    const response = await AxiosLoginUserAsync(mobileNumber)
    console.log(response)
    if (response.status === "1") {
      dispatch(setPhoneNumber(mobileNumber))
      navigation.navigate("OTPVerifyScreen");
    }
  }

  const handleContinue = () => {
    if (mobileNumber.length < 10) {
      return;
    }
    console.log(mobileNumber);
    handleLoginAction()
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fefeff",
        width: "100%",
        paddingHorizontal: 16,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "800",
          width: "100%",
          textAlign: "left",
          marginBottom: 16,
        }}
      >
        Welcome back! Let's pick up where you left off.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>Mobile Number</Text>
        <View style={styles.inputWrapper}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqZSVh-r980BVONEUOxFXzOYmFMYzFqisgllqPHIFxA&s",
            }}
            style={styles.flagIcon}
          />
          <View style={styles.separator} />
          <TextInput
            style={styles.inputText}
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            maxLength={10}
          />
        </View>
      </View>
      <Pressable
        onPress={handleContinue}
        style={[
          {
            width: "100%",
            backgroundColor: GlobalColors.primaryColor + "60",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            marginTop: 32,
          },
          mobileNumber.length === 10 && {
            backgroundColor: GlobalColors.primaryColor,
          },
        ]}
      >
        <Text style={{ fontSize: 20, color: "#fcfcfc", fontWeight: "500" }}>
          Continue
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  space: {
    height: 70,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  inputContainer: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: GlobalColors.primaryColor,
    borderRadius: 8,
  },
  titleInput: {
    position: "absolute",
    top: -12,
    marginLeft: 16,
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "#fefeff",
    borderRadius: 5,
    zIndex: 1,
    fontSize: 12,
    color: GlobalColors.primaryColor,
    fontWeight: "bold",
    // borderWidth: 0.5,
    // borderColor: "#d0d0d0",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 0,
    paddingHorizontal: 8,
  },
  flagIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: "grey",
    marginLeft: 10,
  },
  inputText: {
    flex: 1,
    height: 48,
    paddingHorizontal: 10,
    color: "#202423",
    fontSize: 16,
  },
  button: {
    backgroundColor: GlobalColors.primaryColor,
    padding: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  termsText: {
    fontSize: 11,
    color: "black",
    textAlign: "center",
    marginTop: 20,
    alignSelf: "center",
    width: 170,
  },
});
