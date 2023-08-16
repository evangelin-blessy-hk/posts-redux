import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:0, title:"rewrite the stars", content:"sad story left ahead..."},
    {id:1, title:"how to change our life", content:"dont know what to do..."},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{}
})

export const getAllPosts = (state) => state.posts

export default postsSlice.reducer