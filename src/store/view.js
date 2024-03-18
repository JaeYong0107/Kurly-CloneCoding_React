import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name: 'view',
    initialState: { items: [] },
    reducers: {
        toRecentView(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item => item.id === newItem.id));

            if (existingItem) {
                const sortedItem = state.items.filter((item => item.id !== newItem.id))
                state.items = sortedItem;
            }

            state.items.unshift({
                id: newItem.id,
                title: newItem.title,
                image: newItem.image
            })
        }
    }
})

export const viewActions = viewSlice.actions;
export default viewSlice.reducer;