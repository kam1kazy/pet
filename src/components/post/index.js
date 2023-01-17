import React from "react"

export default function Post({ title, description, time, author, tags }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__tags'>
          <ul>
            {tags.map((tag, i) => {
              return <li key={i}>#{tag.tagName}</li>
            })}
          </ul>
        </div>
        <div className='post__header--time'>
          <p>{time}</p>
        </div>
      </div>

      <div className='post__content'>
        <div className='post__content--title'>
          <h4>{title}</h4>
        </div>

        <div className='post__content--message'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
