import uuid from "uuid";

//ADD_EVENT
export const addEvent = ({
    id = "",
    timeCreated = "",
    title = "",
    note = "",
    tags = [],
    relatedTasks = {
        thisIsBlocking: [],
        thisIsBlockedBy: [],
        thisCanBeCombinedWith: []
    },
    reminders = [],
    attachmentShortcuts = {
        comingSoonMessage: "",
        message: ""
    }
}) => ({
    type: "ADD_EVENT",
    event: {
        id: uuid(),
        timeCreated,
        title,
        note,
        tags,
        relatedTasks,
        reminders,
        attachmentShortcuts
    }
});

export const removeEvent = ({ id } = {}) => ({
    type: "REMOVE_EVENT",
    id
});

export const editEvent = (id, updates) => ({
    type: "EDIT_EVENT",
    id,
    updates
});
