import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IPost, fetchPosts } from './fetchPosts';
import { deletePost } from './deletePost';

import { LoadingStatuses } from '../../../constants/LoadingStatuses';

import { RootState } from '../../index';

interface IInitialState {
  allPostsAreLoaded: boolean,
  userIdsWithLoadedPosts: number[],
  activePostId: number | null;
  statusOfLoading: string;
  errorMessage: string;
}

const initialState: IInitialState = {
  allPostsAreLoaded: false,
  userIdsWithLoadedPosts: [],
  activePostId: null,
  statusOfLoading: LoadingStatuses.idle,
  errorMessage: ''
};

const postsEntityAdapter = createEntityAdapter<IPost>();

const dataPostsSlice = createSlice({
  name: 'posts',
  initialState: postsEntityAdapter.getInitialState(initialState),
  reducers: {
    setActivePostId(state, action: PayloadAction<{ id: number | null }>) {
      state.activePostId = action.payload.id;
    },
    updatePost(state, action: PayloadAction<{ post: IPost }>) {
      postsEntityAdapter.upsertOne(state, action.payload.post);
    },
    updateUserIdsWithLoadedPosts(state, action: PayloadAction<{ ids: number[] }>) {
      state.userIdsWithLoadedPosts = [...state.userIdsWithLoadedPosts, ...action.payload.ids]
    },
    setAllPostsAreLoaded(state) {
      state.allPostsAreLoaded = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.statusOfLoading = LoadingStatuses.pending;
        state.errorMessage = '';
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        const { posts, method } = payload;
        state.statusOfLoading = LoadingStatuses.fulfilled;
        postsEntityAdapter.upsertMany(state, posts);
        if (method === 'post') {
          const newPost = posts[0];
          state.activePostId = newPost.id;
        }
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        if (!payload) return;
        const { message } = payload;
        state.statusOfLoading = LoadingStatuses.rejected;
        state.errorMessage = message;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        const { itemId } = payload;
        postsEntityAdapter.removeOne(state, itemId);
      })
      .addCase(deletePost.rejected, (state, { payload }) => {
        if (!payload) return;
        const { message } = payload;
        state.statusOfLoading = LoadingStatuses.rejected;
        state.errorMessage = message;
      });
  }
});

export const selectorsPosts = postsEntityAdapter.getSelectors<RootState>(
  (store) => store.dataPosts
);

export const actionsPosts = dataPostsSlice.actions;

export default dataPostsSlice.reducer;
