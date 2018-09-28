import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EventContainer from "./EventContainer";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
    dayViewComponent: {
        height: "80vh",
        borderTop: "5px dashed #ceb72e",
        borderBottom: "5px dashed #ceb72e",
        marginTop: "2rem",
        marginBottom: "2rem"
    }
};

class DayViewComponent extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.dayViewComponent}>
                <Typography variant="headline" component="h3">
                    Day View Component
                </Typography>
                <Grid
                    item
                    container
                    spacing={8}
                    xs={12}
                    justify="center"
                    alignItems="flex-start"
                >
                    <EventContainer />
                </Grid>
            </div>
        );
    }
}

DayViewComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DayViewComponent);
