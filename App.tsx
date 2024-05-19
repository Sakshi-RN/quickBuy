import "expo-dev-client";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import store from "./app/store/store";
import { Provider } from "react-redux";
import ToastProvider from "./app/components/common/ToastProvider";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
      <ToastProvider />
    </>
  );
}
