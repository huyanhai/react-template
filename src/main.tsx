import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";

import { persistor, store } from "@/store";
import i18n from "@/locales";
import AuthRouter from "./router/Auth";

import App from "./App";

const bootstrap = () => {
  const root = document.getElementById("root") as HTMLElement;
  ReactDOM.createRoot(root).render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <React.StrictMode>
              <AuthRouter>
                <App />
              </AuthRouter>
            </React.StrictMode>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

bootstrap();
