import { createSlice } from "@reduxjs/toolkit";
// import "react-native-get-random-values";
// import { v4 as uuidv4 } from "uuid";
import uuid from "react-native-uuid";

const postsInitialState = {
  posts: [
    // {
    //   id: uuid.v4(),
    //   imageUrl: "/",
    //   name: "Ліс",
    //   commentsNumber: 0,
    //   location: "Ivano-Frankivs'k Region, Ukraine",
    // },
  ],
};
export const slice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    addPost: {
      reducer(state, { payload }) {
        state.posts.push(payload);
      },
      prepare({ photoTitle, locationTitle, photoUri, query = 0, location })
      {
        return {
          payload: {
            id: uuid.v4(),
            name: photoTitle,
            imageUrl: photoUri,
            location: locationTitle,
            query,
            coords: location,
          },
        };
      },
    },
  },
});

export const { addPost } = slice.actions;
export const rootReducer = slice.reducer;
