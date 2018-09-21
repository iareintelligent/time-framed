import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TimedEventContainer from "./TimedEventContainer";
import EventContainer from "./EventContainer";

const DayViewComponent = () => (
    <Grid container spacing={8}>
        <Grid item xs={12}>
            <Typography variant="subheading" component="h2">

            </Typography>
        </Grid>
        <Grid item container spacing={8} xs={12} justify="center">
            <TimedEventContainer />
            <EventContainer />
        </Grid>
    </Grid>
);

export default DayViewComponent;
