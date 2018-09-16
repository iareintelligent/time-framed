import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";

function App() {
    return (
        <React.Fragment>
            <CssBaseline>
                <Navbar />
                <Timeline />
            </CssBaseline>
        </React.Fragment>
    );
}

export default App;
