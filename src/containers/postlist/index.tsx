import { useRef, useState } from 'react'
import { usePostsStore } from '../../store/postsStore'
import { Post } from '../../types/data'
import { PostItem } from '../../components/postItem'
import { PostsArea } from './styled'

interface PostListProps {
	posts: Post[]
}

const PostList: React.FC<PostListProps> = (props) => {
	// Достаем посты и функцию для замены состояние Scroll из Store
	const setScrolling = usePostsStore(({ setScrolling }) => setScrolling)
	const isLoading = usePostsStore(({ loading }) => loading)

	// Состояние для Scroll внутри блока с постами
	const [scrollPosition, setScrollPosition] = useState(0)
	// Ссылка на блок с постами
	const areaRef = useRef<HTMLInputElement>(null)

	if (isLoading) return <section>Loading...</section>

	// Меняем состояние Scroll в Store для того чтобы прятать компонент в Toolbar папка containers
	const handleScroll = (event: React.UIEvent<HTMLElement, UIEvent>) => {
		setScrollPosition(event.currentTarget.scrollTop)

		if (scrollPosition < event.currentTarget.scrollTop) {
			setScrolling(true)
		} else {
			setScrolling(false)
		}
	}

	return (
		<PostsArea ref={areaRef} onScroll={handleScroll}>
			{props.posts
				.map((post: Post) => {
					return (
						<PostItem
							key={post.id}
							id={post.id}
							time={post.time}
							title={post.title}
							body={post.body}
							tags={post.tags}
						/>
					)
				})
				.reverse()}
		</PostsArea>
	)
}

export { PostList }
