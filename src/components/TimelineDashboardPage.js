import React from "react";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Timeline from "./Timeline";

const styles = {
    paper: {
        backgroundSize: "1.5rem 1.5rem",
        backgroundImage:
            "linear-gradient(to right, #93FDFE 1px, transparent 1px), linear-gradient(to bottom, #93FDFE 1px, transparent 1px)",
        padding: "1rem",
        minWidth: "100%",
        minHeight: "100%"
    }
};

const TimelineDashboardPage = props => {
    const { classes } = props;
    return (
        <Grid container spacing={8} style={{ paddingTop: "70px" }}>
            <Grid
                item
                xs={4}
                container
                justify="center"
                alignItems="flex-start"
            >
                <Sidebar />
            </Grid>
            <Grid
                item
                container
                xs={8}
                justify="center"
                alignItems="flex-start"
            >
                <Paper
                    classes={{
                        root: classes.paper
                    }}
                >
                    <Timeline />
                </Paper>
            </Grid>
        </Grid>
    );
};

TimelineDashboardPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimelineDashboardPage);
