import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import TimePicker from "material-ui-pickers/TimePicker";
import DatePicker from "material-ui-pickers/DatePicker";

class AddEventForm extends React.Component {
    state = {
        title: "",
        titleError: false,
        note: "",
        defaultDate: moment(),
        dateSensitive: false,
        timeSensitive: false,
        selectedDate: undefined,
        errorMsg: "Try again, fool"
    };

    onTitleChange = e => {
        const title = e.target.value;
        this.setState(() => ({ title, titleError: false }));
    };
    onNoteChange = e => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    handleDateChange = date => {
        this.setState({ selectedDate: date.toDate(), dateSensitive: true });
    };
    handleTimeChange = time => {
        this.setState({ selectedTime: time.toDate(), timeSensitive: true });
    };
    onSubmit = e => {
        e.preventDefault();
        if (!this.state.title) {
            this.setState({ titleError: true });
        } else {
            this.setState({ titleError: false });
            this.props.onSubmit({
                title: this.state.title,
                note: this.state.note,
                createdAt: this.state.defaultDate.valueOf(),
                dateSensitive: this.state.dateSensitive,
                timeSensitive: this.state.timeSensitive,
                dateSelected: this.state.dateSelected
            });
            this.resetForm();
        }
    };
    resetForm = () => {
        this.setState({
            title: "",
            titleError: false,
            note: "",
            defaultDate: moment(),
            dateSensitive: false,
            timeSensitive: false,
            selectedDate: undefined,
            errorMsg: "Try again, fool"
        });
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.titleError && (
                    <Typography variant="body2" component="p">
                        {this.state.errorMsg}
                    </Typography>
                )}
                <TextField
                    variant="outlined"
                    label="title"
                    id="eventTitle"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    error={this.state.titleError}
                />
                <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                    <div className="picker">
                        <DatePicker
                            value={this.state.defaultDate}
                            onChange={this.handleDateChange}
                            label="date"
                            variant="outlined"
                            showTodayButton
                        />
                    </div>
                    <div className="picker">
                        <TimePicker
                            value={this.state.defaultDate}
                            onChange={this.handleTimeChange}
                            label="time"
                            variant="outlined"
                        />
                    </div>
                </MuiPickersUtilsProvider>
                <TextField
                    id="eventNote"
                    label="note"
                    multiline
                    rows={3}
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    fullWidth
                />
                <Button type="submit">Add Event</Button>
            </form>
        );
    }
}

export default AddEventForm;
