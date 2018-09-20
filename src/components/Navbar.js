import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const Navbar = () => {
    return (
        <AppBar style={{ position: "fixed" }}>
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Navbar Title
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
