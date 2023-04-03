import { useEffect } from 'react'
import { Button } from '../../button'
import axios from 'axios'

import { API_URL } from '../../../helpers/constants'
import { usePostsStore } from '../../../store/postsStore'

import { Modal, Content, Block, Title, Body } from './styled'

export default function ModalWindows({ show, children, title, onClose }: any) {
	// const showHideClassName = show ? styles.modal + ' open' : styles.modal

	// Закрыть на кнопку Esc
	const closeOnEscapeKeyDown = (e: any) => {
		if ((e.charCode || e.keyCode) === 27) {
			onClose()
		}
	}

	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown)
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const axiosPost = () => {
		axios({
			method: 'post',
			url: API_URL,
			data: {
				time: new Date(),
				tags: [
					{
						tagName: 'Музыка',
					},
					{
						tagName: 'Дизайн',
					},
				],
				title: 'title',
				body: 'body',
			},
		})
			.then((res) => console.log(res))
			.catch(function (error) {
				console.log(error)
			})
			.then(() => usePostsStore.getState().fetchPosts())
	}

	return (
		<Modal onClick={onClose}>
			<Content onClick={(e) => e.stopPropagation()}>
				<Block>
					<Title>{title}</Title>
				</Block>
				<Body>{children}</Body>
				<Block>
					<Button title='Отправить' action={() => axiosPost()} />
				</Block>
				<Block>
					<Button title='Закрыть' action={onClose} />
				</Block>
			</Content>
		</Modal>
	)
}
