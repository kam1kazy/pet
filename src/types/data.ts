export interface Post {
	id: number
	time: string
	title: string
	body: string
	tags?: [{ tagName: string }]
}
