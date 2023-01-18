import Header from "./containers/header"
import Toolbars from "./containers/toolbars"
import CarouselTags from "./components/carouselTags"
// import Post from "./components/post"

function App() {
  return (
    <>
      <Header />
      <Toolbars />

      <CarouselTags />

      <section className='posts'>
        {/* {post.map((post) => {
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
        })} */}
      </section>

      <section className='footer'>
        <span>.</span>
      </section>
    </>
  )
}

export default App
