import React from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const EventListFilters = props => (
    <TextField
        id="searchInput"
        margin="normal"
        style={{ width: "100%" }}
        label="Find a specific task..."
        value={props.filters.text}
        onChange={e => {
            props.dispatch(setTextFilter(e.target.value));
        }}
    />
);

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(EventListFilters);
