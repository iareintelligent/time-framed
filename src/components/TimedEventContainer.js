import React from "react";
import { Grid } from "@material-ui/core";
import Event from "./Event";

class TimedEventContainer extends React.Component {
    render() {
        return (
            <Grid container spacing={0} item xs={12} justify="center">
                <Grid item xs={2} />
                <Grid item xs={10} container spacing={8}>
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
        );
    }
}

export default TimedEventContainer;
