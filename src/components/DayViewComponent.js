import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Event from "./Event";
const DayViewComponent = props => (
        <Grid container spacing={32} style={{ border: "2px dashed yellow", borderLeft: 0, borderRight: 0 }}>
            <Grid container item xs={12} style={{ paddingLeft: "1rem" }}>
                <Typography variant="subheading" component="h2">
                    Day View
                </Typography>
            </Grid>
            <Grid container item xs={2} />
            <Grid container item xs={10} spacing={8}>
                <Event />
                <Event />
            </Grid>
        </Grid>
);

export default DayViewComponent;
