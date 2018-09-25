import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import TimelineDashboardPage from "./components/TimelineDashboardPage";
import configureStore from "./store/configureStore";
import { addEvent } from "./actions/events";
import { setTextFilter } from "./actions/filters";
import getVisibleEvents from "./selectors/events";

const store = configureStore();

store.dispatch(
    addEvent({
        title: "Pick up Poke Lunch",
        description: "pick up lunch from Pokeworks - 3rd Ave 1200 3rd Ave"
    })
);
store.dispatch(setTextFilter("poke"));

const state = store.getState();
const visibleEvents = getVisibleEvents(state.events, state.filters);
console.log(visibleEvents);

function App(props) {
    return (
        <React.Fragment>
            <CssBaseline>
                <Navbar />
                <TimelineDashboardPage />
            </CssBaseline>
        </React.Fragment>
    );
}

export default App;
