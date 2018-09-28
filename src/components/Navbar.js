import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import RootRef from "@material-ui/core/RootRef";
import { Divider } from "@material-ui/core";
import AddEventExpansionPanel from "./AddEventExpansionPanel";

class Navbar extends React.Component {
    state = {
        height: null
    };
    navbarRef = React.createRef();

    adjustNavPadding = () => {
        const height = this.navbarRef.current.clientHeight;
        this.setState({ height: height });
    };

    componentDidMount() {
        this.adjustNavPadding();
    }

    render() {
        return (
            <nav>
                <RootRef rootRef={this.navbarRef}>
                    <AppBar style={{ position: "fixed" }}>
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                Height: {this.state.height}
                            </Typography>
                        </Toolbar>
                        <Divider />
                        <AddEventExpansionPanel />
                    </AppBar>
                </RootRef>
                <div id="navSpacer" style={{ height: this.state.height }} />
            </nav>
        );
    }
}

export default Navbar;
