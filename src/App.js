import Header from "./containers/header"
import Toolbars from "./containers/toolbars"
import Carousel from "./components/carousel"
import Post from "./components/post"

function App() {
  const post = [
    {
      id: 1,
      author: "Dope Den",
      tags: [{ tagName: "Музыка" }, { tagName: "Дизайн" }],
      time: "2 hr ago",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officiis cum veritatis harum illum atque quidem iste odio ullam modi, nihil numquam aperiam aliquid quia fuga. Nostrum hic aut voluptates!",
    },
    {
      id: 2,
      author: "Dope Den",
      tags: [{ tagName: "Письки" }, { tagName: "Титьки" }],
      time: "4 hr ago",
      title: "Doklem ipsum  consectetur adipisicing elit.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officiis cum veritatis harum illum atque quidem iste odio ullam modi, nihil numquam aperiam aliquid quia fuga. Nostrum hic aut voluptates!",
    },
  ]

  return (
    <>
      <Header />
      <Toolbars />

      <Carousel />

      <section className='posts'>
        {post.map((post) => {
          return (
            <Post
              key={post.id}
              author={post.author}
              time={post.time}
              title={post.title}
              tags={post.tags}
              description={post.description}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
