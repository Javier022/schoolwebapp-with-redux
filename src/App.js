import React from "react";
import "./styles/main.css";

// page
import AllPages from "./pages/index";

// redux
import { Provider } from "react-redux";
import generateStore from "./redux/store";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <AllPages />
    </Provider>
  );
}

export default App;
