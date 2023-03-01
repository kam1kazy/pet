import styled from 'styled-components'
import { useTagsStore } from '../../store/tagsStore'

const widthDecorLine = 55

const CarouselArea = styled.section`
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

export default function CarouselTags() {
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
