import React from "react";
import { Grid } from "@material-ui/core";
import Event from "./Event";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
    dayContainer: {
        borderTop: "2px dashed yellow"
    }
};
class TimedEventContainer extends React.Component {
    render(props) {
        const { classes } = props;
        return (
            <div classes={classes.dayContainer}>
                <Grid container spacing={0} item xs={12} justify="center">
                    <Grid item xs={2} />
                    <Grid item xs={10} container spacing={8} justify="center">
                        <Grid item xs={12}>
                            <Event />
                        </Grid>
                        <Grid item xs={12}>
                            <Event />
                        </Grid>
                        <Grid item xs={12}>
                            <Event />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TimedEventContainer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimedEventContainer);
