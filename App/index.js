import React from "react";
import Home from "./screens/Home";
import { AlertProvider } from "./components/Alert";
import { Provider } from "react-redux";
import store from "./config/store";

import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryColor: "#FF6F61",

  $border: "#E2E2E2",
});

export default () => (
    <Provider store={store}>
      <AlertProvider>
        <Home />
      </AlertProvider>
    </Provider>
  );
  
