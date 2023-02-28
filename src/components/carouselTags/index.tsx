import styled from 'styled-components'
import { useTagsStore } from '../../store/tagsStore'

export default function CarouselTags() {
	const tagsArr = useTagsStore((state) => state.tags)

	const widthDecorLine = 55

	const CarouselTags = styled.section`
		margin: 2.2rem 0.2rem 1rem;
	`

	const TagList = styled.ul`
		display: flex;
		padding-bottom: 0.625rem;
		overflow-x: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			visibility: hidden;
		}
	`

	const ListElement = styled.li`
		margin-right: 1.25rem;
		white-space: nowrap;
		position: relative;
		opacity: 0.6;
		cursor: pointer;

		&::before {
			content: '';
			display: block;
			width: 0;
			height: 0.125rem;
			background-color: ${(props) => props.theme.color};

			position: absolute;
			bottom: -0.625rem;
			left: 0;

			transition: width ${(props) => props.theme.transition};
		}

		&:hover {
			opacity: 1;
			&::before {
				width: ${widthDecorLine}%;
			}
		}

		&.active {
			&::before {
				width: ${widthDecorLine}%;
			}
		}
	`
	type TagArray = { id: number; name: string }

	return (
		<CarouselTags>
			<TagList>
				{tagsArr.map((tag: TagArray) => {
					return <ListElement key={tag.id}># {tag.name}</ListElement>
				})}
			</TagList>
		</CarouselTags>
	)
}
