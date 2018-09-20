import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import TimelineDashboardPage from "./components/TimelineDashboardPage";

function App(props) {
    return (
        <React.Fragment>
            <CssBaseline>
                <Navbar />
                <TimelineDashboardPage />
            </CssBaseline>
        </React.Fragment>
    );
}

export default App;
