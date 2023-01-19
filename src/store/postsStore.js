import { create } from 'zustand'
import { PostService } from '../services/post.service'

export const usePostsStore = create((set, get) => ({
	loading: false,
	error: null,
	info: {},
	posts: [],

	addPost: (post) =>
		set((state) => ({
			posts: [{ name: post.name, id: Date.now() }, ...state.posts],
		})),
	removePost: (id) =>
		set((state) => ({
			posts: state.posts.filter((post) => post.id !== id),
		})),

	async fetchPosts(state) {
		set({ loading: true })

		try {
			const response = await PostService.getAll()
			set({ posts: await response })
		} catch (e) {
			let error = e
			// custom error
			if (e.statusCode === 400) {
				error = await e.json()
			}
			set({ error })
		} finally {
			set({ loading: false })
		}
	},
}))
