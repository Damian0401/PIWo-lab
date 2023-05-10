import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "react-toastify/dist/ReactToastify.min.css";
import { Provider } from "react-redux";
import { store } from "./common/state/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
