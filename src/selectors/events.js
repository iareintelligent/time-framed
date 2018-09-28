import moment from "moment";

export default (events, { text, startDate, endDate }) => {
    return events.filter(event => {
        const createdAtMoment = moment(event.createdAt);

        const startDateMatch = startDate
            ? startDate.isSameOrBefore(createdAtMoment, "day")
            : true;
        const endDateMatch = endDate
            ? endDate.isSameOrAfter(createdAtMoment, "day")
            : true;
        const textMatch =
            event.note.toLowerCase().includes(text) ||
            event.title.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    });
};
