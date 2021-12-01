import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import reducers from "./store/reducers";
import Routes from "./Routes";
const store = createStore(reducers);

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: Noto Sans KR;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <GlobalStyle />
  </Provider>,
  document.getElementById("root")
);
