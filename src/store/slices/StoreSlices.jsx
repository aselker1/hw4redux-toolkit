import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
};

const StoreSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        changeComponent: (state, action) => {
            state.component = action.payload;
            state.history.push(action.payload);
        },
    }});

    const storeReducer = StoreSlice.reducer;

export const { changeComponent } = StoreSlice.actions;

export default storeReducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//  component: 'Home',
//  history: [],
// };

// const appSlice = createSlice({
//  name: 'app',
//  initialState,
//  reducers: {
//     changeComponent: (state, action) => {
//       state.component = action.payload;
//       state.history.push(action.payload);
//     },
//  },
// });

// // goBack: (state) => {
// //     state.history.pop();
// //     state.component = state.history[state.history.length - 1];
// // },

// export const { changeComponent } = appSlice.actions;

// export const appReducer = appSlice.reducer;