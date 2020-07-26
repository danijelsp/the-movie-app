// import dependencies
import React from "react";
import { Provider } from "react-redux";

// import css
import "./app.css";

// import containers
import Main from "./containers/main";

// import store
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
