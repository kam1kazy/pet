import { useState, useRef } from 'react'
import { RiNotificationLine } from 'react-icons/ri'
import { Notification, MessageList, Overlay } from './styled'

const Alerts: React.FC = () => {
	const [toggle, setToggle] = useState(false)
	const wrapperRef = useRef(null)

	const handleToggle = (
		event:
			| React.MouseEvent<SVGElement, MouseEvent>
			| React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		event.stopPropagation()
		const target = event.target as Element

		console.log()

		if (target.classList[0] === Overlay.styledComponentId) {
			setToggle(false)
		} else {
			setToggle(true)
		}
	}

	return (
		<Notification>
			<RiNotificationLine onClick={(event) => handleToggle(event)} />
			{toggle ? (
				<Overlay onClick={(event) => handleToggle(event)}>
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
				</Overlay>
			) : null}
		</Notification>
	)
}

export { Alerts }
