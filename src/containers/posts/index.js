import React, { useCallback } from "react"
import { usePostsStore } from "../../store/postsStore"

// Компоненты
import Post from "../../components/post"
// Стили
import styles from "./index.module.scss"

export default function Posts() {
  const posts = usePostsStore(useCallback(({ posts }) => posts, []))
  const isLoading = usePostsStore((state) => state.loading)

  if (isLoading) return <div>Loading...</div>

  return (
    <section className={styles.posts}>
      {posts
        .map((post) => {
          return (
            <Post
              key={post.id}
              time={post.time}
              title={post.title}
              tags={post.tags}
              description={post.body}
            />
          )
        })
        .reverse()}
    </section>
  )
}
