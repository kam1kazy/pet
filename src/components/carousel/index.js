import React from "react"
import { useTagsStore } from "../../store/tagsStore"

export default function Carousel() {
  const tagsArr = useTagsStore((state) => state.tags)

  return (
    <section className='carousel'>
      <ul>
        {tagsArr.map((tag, i) => {
          return (
            <li key={tag.id} className={i === 0 ? "active" : ""}>
              #{tag.name}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
