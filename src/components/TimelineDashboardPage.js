import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Timeline from "./Timeline";
import EventListFilters from "./EventListFilters";

const styles = {
    paper: {
        backgroundSize: "1.5rem 1.5rem",
        backgroundImage:
            "linear-gradient(to right, #93FDFE 1px, transparent 1px), linear-gradient(to bottom, #93FDFE 1px, transparent 1px)",
        overflow: "scroll",
        maxHeight: "80vh"
    }
};

const TimelineDashboardPage = props => {
    const { classes } = props;
    return (
        <div>
            <EventListFilters />
            <Grid container spacing={0}>
                <Grid item md={2} />
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <Timeline />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

TimelineDashboardPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimelineDashboardPage);
