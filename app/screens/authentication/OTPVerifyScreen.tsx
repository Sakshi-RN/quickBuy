import React, { useEffect, useRef, useState } from "react";
import { TextInput, View, Text, Pressable } from "react-native";
import { GlobalColors } from "../../theme/GlobalColors";
import { AxiosVerifyUserOTPAsync } from "../../services/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../../types/reducers";
import { setIsLoggedIn } from "../../store/reducers/AuthReducer";
import { setAuthToken } from "../../services/AxiosConfig";

function OTPVerifyScreen() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [inputError, setInputError] = useState<boolean>(false);
  const [resendTimer, setResendTimer] = useState<number>(60);
  const inputRefs = useRef<Array<React.RefObject<TextInput>>>(
    Array(6)
      .fill(null)
      .map(() => React.createRef<TextInput>())
  );
  const phonenumber = useSelector(
    (store: StoreInterface) => store.auth
  ).phoneNumber;
  const dispatch = useDispatch();

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1]?.current?.focus();
    }
  };

  const handleOTPVerifyAction = async (otp: string) => {
    const response = await AxiosVerifyUserOTPAsync(phonenumber, otp);
    console.log(response);
    if (response.status === "1") {
      dispatch(
        setIsLoggedIn({
          loggedIn: true,
          token: response.data,
        })
      );
      setAuthToken(response.data);
    }
  };
  const handleVerify = async () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    if (enteredOtp.length !== otp.length) {
      setInputError(true);
    } else {
      setInputError(false);
      await handleOTPVerifyAction(enteredOtp);
    }
  };

  const handleResend = () => {
    // Code to resend OTP
    setResendTimer(60); // Reset the timer
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setResendTimer((prevTimer) =>
        prevTimer > 0 ? prevTimer - 1 : prevTimer
      );
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fefeff",
        width: "100%",
        paddingHorizontal: 16,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "800" }}>
        Verify with OTP sent to {phonenumber}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 32,
        }}
      >
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs.current[index]}
            style={{
              borderWidth: 2,
              borderColor: inputError ? "#D90429" : "black",
              borderRadius: 8,
              padding: 10,
              marginHorizontal: 5,
              textAlign: "center",
              width: 44,
              fontSize: 20,
            }}
            onChangeText={(value) => handleOtpChange(index, value)}
            value={digit}
            maxLength={1}
            keyboardType="numeric"
            cursorColor={GlobalColors.primaryColor}
          />
        ))}
      </View>
      <Pressable
        onPress={handleVerify}
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
          true && {
            backgroundColor: GlobalColors.primaryColor,
          },
        ]}
      >
        <Text style={{ fontSize: 20, color: "#fcfcfc", fontWeight: "500" }}>
          Verify OTP
        </Text>
      </Pressable>
      <Text
        style={{
          alignSelf: "center",
          marginTop: 16,
          color: "#787878",
          fontSize: 15,
        }}
      >
        Didn't recieve it ? Retry in
        <Text style={{ fontWeight: "600", color: "#202423" }}>
          {resendTimer} seconds
        </Text>
      </Text>
      <Pressable
        disabled={resendTimer !== 0}
        style={{
          alignSelf: "center",
          marginTop: 16,
        }}
        onPress={handleResend}
      >
        <Text
          style={[
            {
              color: GlobalColors.primaryColor + "60",
              fontSize: 16,
              fontWeight: "700",
            },
            resendTimer === 0 && { color: GlobalColors.primaryColor },
          ]}
        >
          Resend OTP
        </Text>
      </Pressable>
    </View>
  );
}

export default OTPVerifyScreen;
