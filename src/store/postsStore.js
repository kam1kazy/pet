import { create } from "zustand"

export const useTagsStore = create((set) => ({
  loading: false,
  error: null,
  info: {},
  posts: [
    { id: 1, name: "Музыка" },
    { id: 2, name: "Софт" },
    { id: 3, name: "UX Design" },
    { id: 4, name: "Цитаты" },
    { id: 5, name: "Планы" },
  ],
  addTag: (post) =>
    set((state) => ({
      posts: [{ name: post.name, id: Date.now() }, ...state.posts],
    })),
  removeTag: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),

  async fetchPosts() {
    set({ loading: true })
    try {
      const response = await fetch("http://localhost:3001/")
      if (!response.ok) throw response
      set({ posts: await response.json() })

      console.log(response.json())
      console.log(response)
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
