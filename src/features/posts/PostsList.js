import React from 'react'
import { useSelector } from "react-redux";
import { getAllPosts } from './postsSlice';

const PostsList = () => {
    const posts = useSelector(getAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,10)}</p>
        </article>
    ))

  return(
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList