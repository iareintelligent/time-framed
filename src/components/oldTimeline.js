import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import Event from "./Event";

const SPACE_ID = "vt6b3xaiffdq";
const ACCESS_TOKEN =
    "d1425a07cc362fe2bcdbe963c39c5aefcc97ed5ee363d9690cd548e3bda768ba";

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

class Timeline extends Component {
    state = {
        events: [],
        searchString: ""
    };

    constructor() {
        super();
        this.getEvents();
    }

    getEvents = () => {
        client
            .getEntries({
                content_type: "event",
                query: this.state.searchString
            })
            .then(response => {
                this.setState({ events: response.items });
                console.log(this.state.events);
            })
            .catch(error => {
                console.log("Error occurred while fetching Entries");
                console.error(error);
            });
    };
    onSearchInputChange = event => {
        console.log("Search changed ..." + event.target.value);
        if (event.target.value) {
            this.setState({ searchString: event.target.value });
        } else {
            this.setState({ searchString: "" });
        }
        this.getEvents();
    };
    render() {
        return (
            <section>
                {this.state.events ? (
                    <div>
                        <TextField
                            style={{ marginLeft: 24 }}
                            id="searchInput"
                            margin="normal"
                            label="Let's look more into..."
                            onChange={this.onSearchInputChange}
                        />
                        <List spacing={1}>
                            {this.state.events.map(currentEvent => (
                                <ListItem key={currentEvent.sys.createdAt}>
                                    <Event event={currentEvent} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                ) : (
                    "No events found"
                )}
            </section>
        );
    }
}
export default Timeline;
