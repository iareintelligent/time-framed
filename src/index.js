import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addEvent } from "./actions/events";

const store = configureStore();

store.dispatch(
    addEvent({
        title: "Pick up Poke Lunch",
        note: "pick up lunch from Pokeworks - 3rd Ave 1200 3rd Ave"
    })
);
store.dispatch(
    addEvent({
        title: "YetiFit meeting",
        note: "Ipsum Lorem MotherTruckers"
    })
);

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
