import { useState, useRef, useEffect } from 'react'
import { RiNotificationLine } from 'react-icons/ri'
import { Notification, MessageList } from './styled'

// Клик вне блока с уведомлениями
function useOutsideClick(ref: any, setToggle: any) {
	useEffect(() => {
		// События на клик вне блока
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setToggle(false)
			}
		}
		// Привязываем слушатель события
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			// Отвязываем слушатель события
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, setToggle])
}

const Alerts: React.FC = () => {
	const [toggle, setToggle] = useState(false)

	const wrapperRef = useRef(null)
	useOutsideClick(wrapperRef, setToggle)

	return (
		<Notification>
			<RiNotificationLine onClick={() => setToggle(!toggle)} />
			{toggle ? (
				<MessageList id='notification' ref={wrapperRef}>
					<ul>
						<li>
							<h6>Title Message</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, unde
								odio non commodi animi minima!
							</p>
						</li>
						<li>
							<h6>Title Message</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, unde
								odio non commodi animi minima!
							</p>
						</li>
						<li>
							<h6>Title Message</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, unde
								odio non commodi animi minima!
							</p>
						</li>
						<li>
							<h6>Title Message</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, unde
								odio non commodi animi minima!
							</p>
						</li>
					</ul>
				</MessageList>
			) : null}
		</Notification>
	)
}

export { Alerts }
