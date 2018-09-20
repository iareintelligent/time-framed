import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Event = props => {
    console.log(props);
    return (
        <div>
            {props.event ? (
                <Card>
                    <Grid container spacing={8}>
                        <Grid
                            item
                            container
                            xs={12}
                            justify="center"
                            alignItems="center"
                        >
                            <figure>
                                <img
                                    alt="test"
                                    src="//placehold.it/275x275"
                                    width="128"
                                    height="128"
                                />
                            </figure>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="headline"
                                    component="h2"
                                >
                                    {props.event.fields.whatTitle}
                                </Typography>
                                <Typography component="p">
                                    {props.event.fields.whatContent}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href={"#"}>
                                    Oh god please don't click here
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            ) : null}
        </div>
    );
};

export default Event;
