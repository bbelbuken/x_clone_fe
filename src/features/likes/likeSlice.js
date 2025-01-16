import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: [],
};

const likeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    addLike: (state, action) => {
      const { postId, userId } = action.payload;
      const existingLike = state.likes.find(
        (like) => like.postId === postId && like.userId === userId,
      );
      if (!existingLike) {
        state.likes.push({ postId, userId });
      }
    },
  },
  removeLike: (state, action) => {
    const { postId, userId } = action.payload;
    state.likes = state.likes.filter(
      (like) => !(like.postId === postId && like.userId === userId),
    );
  },
});

export const { addLike, removeLike } = likeSlice.actions;

export default likeSlice.reducer;
