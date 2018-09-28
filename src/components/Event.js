import React from "react";
import { connect } from "react-redux";
import { removeEvent } from "../actions/events";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    }
});

const Event = ({ note, id, createdAt, title, classes, dispatch }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="title">{title}</Typography>
                <Typography variant="body2">{note}</Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={() => {
                        dispatch(removeEvent({ id }));
                    }}
                >
                    Delete
                    <DeleteIcon className={classes.rightIcon} />
                </Button>
            </CardContent>
        </Card>
    );
};

Event.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        events: state.events
    };
};

export default connect(mapStateToProps)(withStyles(styles)(Event));
