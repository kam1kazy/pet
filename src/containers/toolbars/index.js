import React from "react"
import CreatePost from "../../components/toolbars/createPost"
import Search from "../../components/toolbars/search"

export default function ToolBars() {
  return (
    <section className='toolbar'>
      <Search />
      <CreatePost />
    </section>
  )
}
