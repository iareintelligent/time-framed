import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Event = props => {
    console.log(props);
    return (
        <div>
            {props.event ? (
                <Card>
                    <Grid container spacing={16}>
                        <Grid item>
                            <ButtonBase>
                            <CardMedia
                                style={{ height: 0, paddingTop: "56.25%" }}
                                // image={props.event.fields..fields.file.url}
                                title={props.event.fields.whatTitle}
                            />    
                            </ButtonBase>
                        </Grid>
                        

                    </Grid>
                    
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
                </Card>
            ) : null}
        </div>
    );
};

export default Event;
