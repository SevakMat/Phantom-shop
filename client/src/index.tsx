import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./store";
import "./index.css";
import { SidebarProvider } from "./contexts/SidebarContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </PersistGate>
  </Provider>
);
