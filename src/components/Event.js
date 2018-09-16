import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const Event = props => {
    console.log(props);
    return (
        <div>
            {props.event ? (
                <Card>
                    <Grid container spacing={12}>
                        <Grid
                            item
                            container
                            xs={2}
                            justify="center"
                            alignItems="center"
                        >
                            <ButtonBase>
                                <img alt="test" src="//placehold.it/275x275" width="128" height="128" />
                            </ButtonBase>
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
