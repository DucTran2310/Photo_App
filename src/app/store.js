import PhotoReducer from 'features/Photo/photoSlice';
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    photos: PhotoReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;