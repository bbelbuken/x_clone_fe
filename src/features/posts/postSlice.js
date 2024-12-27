import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: 1,
    content:
      'Is that time of the year!! Unity is having a New year sale and we are part of it🎁Dragons, wolves, horses! #unity3d https://t.co/8plqx57HKc #gamedev #indiedev',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
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
  {
    id: 2,
    content:
      'This is me after all the holiday feasts. #indiegame #survivalhorror #gamedev This is me after all the holiday feasts. #indiegame #survivalhorror #gamedev This is me after all the holiday feasts. #indiegame #survivalhorror #gamedev This is me after all the holiday feasts. #indiegame #survivalhorror #gamedev',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      replies: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      likes: 0,
      views: 0,
    },
  },
  {
    id: 3,
    content: 'This is my first Post',
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: {
      replies: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      likes: 0,
      views: 0,
    },
  },
  {
    id: 4,
    content: 'This is my second Post',
    date: sub(new Date(), { minutes: 30 }).toISOString(),
    reactions: {
      replies: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      likes: 0,
      views: 0,
    },
  },
  {
    id: 5,
    content: 'This is my first Post',
    date: sub(new Date(), { minutes: 62 }).toISOString(),
    reactions: {
      replies: 0,
      reposts: {
        repost: 1,
        quote: 0,
      },
      likes: 0,
      views: 0,
    },
  },
  {
    id: 6,
    content: 'This is my second Post',
    date: sub(new Date(), { minutes: 120 }).toISOString(),
    reactions: {
      replies: 0,
      reposts: {
        repost: 1,
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
