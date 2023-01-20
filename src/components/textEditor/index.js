import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'

// Компоненты
import InputField from '../inputField'

// Стили
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './index.module.scss'
import './index.scss'

export default function TextEditor() {
	// eslint-disable-next-line no-unused-vars
	const [contentState, setContentState] = useState()
	// const editorState = EditorState.createEmpty()

	return (
		<>
			<div className={styles.header}>
				<InputField title='Заголовок' />
			</div>
			<Editor
				wrapperClassName='textWrapper'
				editorClassName='textEditor'
				// editorState={editorState}
				onContentStateChange={setContentState}
				placeholder='Здесь можно печатать...'
				mention={{
					separator: ' ',
					trigger: '#',
					suggestions: [
						{ text: 'APPLE', value: 'apple', url: 'apple' },
						{ text: 'BANANA', value: 'banana', url: 'banana' },
						{ text: 'CHERRY', value: 'cherry', url: 'cherry' },
						{ text: 'DURIAN', value: 'durian', url: 'durian' },
						{ text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
						{ text: 'FIG', value: 'fig', url: 'fig' },
						{ text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
						{ text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
					],
				}}
				hashtag={{}}
			/>
			{/* <textarea disabled value={JSON.stringify(contentState, null, 4)} /> */}
		</>
	)
}
