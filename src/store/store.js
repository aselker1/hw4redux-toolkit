// import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import postsReducer from './slices/postSlice';

// const rootReducer = combineReducers({
//     posts: postsReducer
// });

// const store = configureStore({ reducer: rootReducer });

// export default store;
import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './slices/postSlice';

const rootReducer = ({
    posts: postsReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;