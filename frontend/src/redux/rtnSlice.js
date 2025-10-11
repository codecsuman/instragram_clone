import { createSlice } from "@reduxjs/toolkit";

const rtnSlice = createSlice({
    name: "realTimeNotification",
    initialState: {
        likeNotification: [], // stores notifications [{ userId, type }]
    },
    reducers: {
        setLikeNotification: (state, action) => {
            const { type, userId } = action.payload;

            if (type === "like") {
                // prevent duplicate notifications from the same user
                const alreadyExists = state.likeNotification.some(
                    (item) => item.userId === userId
                );
                if (!alreadyExists) {
                    state.likeNotification.push(action.payload);
                }
            } else if (type === "dislike") {
                // remove notification from that user
                state.likeNotification = state.likeNotification.filter(
                    (item) => item.userId !== userId
                );
            }
        },
        clearLikeNotifications: (state) => {
            state.likeNotification = []; // reset all notifications
        },
    },
});

export const { setLikeNotification, clearLikeNotifications } = rtnSlice.actions;
export default rtnSlice.reducer;
