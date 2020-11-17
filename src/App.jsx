import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Box, CssBaseline } from "@material-ui/core";
import "./style.css";

import AcceptCode from "./AcceptCode";

const App = () => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                light: "#fafafa",
                main: "#f5f5f5",
                dark: "#eeeeee"
            },
            secondary: {
                light: "#9ccc65",
                main: "#8bc34a",
                dark: "#7cb342"
            }
        },
        typography: {
            h1: {
                fontSize: 50
            },
            h2: {
                fontSize: 32
            },
            h3: {
                fontSize: 27
            },
            h4: {
                fontSize: 20
            },
            h5: {
                fontSize: 17
            },
            h6: {
                fontSize: 15
            },
            fontSize: 14,
            fontFamily: [
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                "sans-serif",
                '"Fira Sans Extra Condensed"',
                '"Raleway"'
            ].join(",")
        }
    });

    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline/>
            <div className="root">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    css={ {height: "100vh"} }
                >
                    <AcceptCode/>
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default App;
