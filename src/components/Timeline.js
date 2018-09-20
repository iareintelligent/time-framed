import React from "react";
import DayViewComponent from "./DayViewComponent";

class Timeline extends React.Component {
    render() {
        return (
            <section>
                <DayViewComponent />
                <DayViewComponent />
                <DayViewComponent />
            </section>
        );
    }
}

export default Timeline;
