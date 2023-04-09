import { App } from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
   DefaultTheme,
   ThemeProvider,
   createGlobalStyle,
} from "styled-components";

import { store } from "core/store";

import "assets/styles/global.scss";
import {ErrorBounder} from "./ErrorBounder";

const theme: DefaultTheme = {
   colors: {
      primary: "#3F3F3F",
      secondary: "#E34564",
      gray: "#828282",
   },
};

const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
  
   body {
      color: ${(props) => props.theme.colors.primary};
      line-height: 1.3;
      font-weight: 400;
      font-family: 'Arial', sans-serif;
      background-color: #fff;
   }
  
   a {
      text-decoration: none;
   }
   
   input, button {
     border: none;
     outline: none;
   }
`;

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <ErrorBounder>
         <Provider store={store}>
            <BrowserRouter>
               <ThemeProvider theme={theme}>
                  <GlobalStyles />
                  <App />
               </ThemeProvider>
            </BrowserRouter>
         </Provider>
      </ErrorBounder>
   </React.StrictMode>
);
