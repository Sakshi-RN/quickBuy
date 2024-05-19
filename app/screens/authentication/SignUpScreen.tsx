import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { GlobalColors } from "../../theme/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import { AxiosRegisterUserAsync } from "../../services/AuthApi";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../../store/reducers/AuthReducer";

const SignUpScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handleSignUpAction = async (phonenumber: string, name: string) => {
    const response = await AxiosRegisterUserAsync(phonenumber, name);
    console.log(response);
    if (response.status === "1") {
      dispatch(setPhoneNumber(mobileNumber))
      navigation.navigate("OTPVerifyScreen");
    }
  };

  const handleContinue = () => {
    if (mobileNumber.length < 10 || name.length <= 4) {
      return;
    }
    console.log(mobileNumber, name);
    handleSignUpAction(mobileNumber, name);
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
          fontSize: 32,
          fontWeight: "800",
          width: "100%",
          textAlign: "left",
        }}
      >
        Join us! Enter your number to start.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputText}
            placeholder="Your Full Name"
            keyboardType="default"
            value={name}
            onChangeText={setName}
            maxLength={24}
          />
        </View>
      </View>
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
          mobileNumber.length === 10 &&
          name.length >= 4 && {
            backgroundColor: GlobalColors.primaryColor,
          },
        ]}
      >
        <Text style={{ fontSize: 20, color: "#fcfcfc", fontWeight: "500" }}>
          Continue
        </Text>
      </Pressable>
      <Text
        style={{
          marginVertical: 16,
          fontSize: 17,
          fontWeight: "600",
          color: "#787878",
        }}
      >
        or
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        style={[
          {
            width: "100%",
            backgroundColor: "#f0f0f0",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            borderWidth: 0.5,
            borderColor: "#12121220",
          },
        ]}
      >
        <Text style={{ fontSize: 17, color: "#121212", fontWeight: "600" }}>
          Login with Number
        </Text>
      </Pressable>
      <View
        style={{
          position: "absolute",
          bottom: 32,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 13,
          }}
        >
          By Clicking, I accept the
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "700",
              textDecorationLine: "underline",
              marginHorizontal: 4,
            }}
          >
            terms of servce
          </Text>
          <Text>&</Text>
          <Text
            style={{
              fontWeight: "700",
              marginHorizontal: 4,
              textDecorationLine: "underline",
            }}
          >
            privacy policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
