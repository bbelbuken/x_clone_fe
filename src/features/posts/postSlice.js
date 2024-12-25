import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: 1,
    content: 'This is my first Post',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      replies: 0,
      reposts: {
        repost: 0,
        quote: 0,
      },
      likes: 0,
      views: 0,
    },
  },
];

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
