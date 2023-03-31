import { useTagsStore } from '../../store/tagsStore'
import { CarouselArea, TagList, ListElement } from './styled'

const CarouselTags: React.FC = () => {
	const tagsArr = useTagsStore((state) => state.tags)
	type TagArrayType = { id: number; name: string }

	return (
		<CarouselArea>
			<TagList>
				{tagsArr.map((tag: TagArrayType) => {
					return <ListElement key={tag.id}># {tag.name}</ListElement>
				})}
			</TagList>
		</CarouselArea>
	)
}

export { CarouselTags }
