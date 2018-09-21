import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class Event extends React.Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="title">Card Title</Typography>
                    <Typography variant="button">Click for deets</Typography>
                </CardContent>
            </Card>
        );
    }
}
