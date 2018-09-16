import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export class Task extends React.Component {
    render() {
        const divStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: "75px",
            marginBottom: ".5rem"
        };
        const dragIndicatorStyle = {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            borderLeft: "2px solid black",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
            borderRadius: "5px 0 0 5px"
        };
        const contentStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            position: "absolute",
            left: "10%"
        };
        const taskColumnStyle = {
            display: "flex",
            flexDirection: "column"
        };
        const h1Style = {
            margin: 0
        };
        const pStyle = {
            margin: "0 0 0 3px"
        };
        return (
            <div style={divStyle}>
                <div className="drag-indicator" style={dragIndicatorStyle}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="content" style={contentStyle}>
                    <h1 style={h1Style}>Task Title</h1>
                    <p style={pStyle}>Time Remaining: </p>
                </div>
                <div className="see-more" style={taskColumnStyle} />
            </div>
        );
    }
}
const a = 5 == "5" ? true : "false";
