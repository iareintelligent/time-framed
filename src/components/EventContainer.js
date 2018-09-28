import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import Event from "./Event";
import selectEvents from "../selectors/events";

const EventsList = props => (
    <React.Fragment>
        {props.events.map(event => (
            <Grid item xs={12} key={event.id}>
                <Event {...event} />
            </Grid>
        ))}
    </React.Fragment>
);

const mapStateToProps = state => {
    return {
        events: selectEvents(state.events, state.filters)
    };
};

export default connect(mapStateToProps)(EventsList);
