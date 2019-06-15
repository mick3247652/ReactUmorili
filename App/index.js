import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./screens/Home";
import { AlertProvider } from "./components/Alert";
import { Provider } from "react-redux";
import { store, persistor } from "./config/store";

import {primaryColor} from './config/colors'

EStyleSheet.build({
  $primaryColor: primaryColor,

  $border: "#E2E2E2",
});

export default () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AlertProvider>
        <Home />
      </AlertProvider>
      </PersistGate>
    </Provider>
  );
  
