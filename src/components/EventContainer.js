import React from "react";
import { Grid } from "@material-ui/core";
import Event from "./Event";

export default class EventContainer extends React.Component {
    render() {
        return (
            <Grid item xs={12} container spacing={8} justify="center">
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
        );
    }
}
