import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider } from "react-query";
import { queryClientConfig } from "./queries/queryClientConfig";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClientConfig}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
