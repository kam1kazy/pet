import { create } from "zustand"

export const useTagsStore = create((set) => ({
  tags: [
    { id: 1, name: "Музыка" },
    { id: 2, name: "Софт" },
    { id: 3, name: "UX Design" },
    { id: 4, name: "Цитаты" },
    { id: 5, name: "Планы" },
  ],
  addTag: (tag) =>
    set((state) => ({
      tags: [{ name: tag.name, id: Date.now() }, ...state.tags],
    })),
  removeTag: (id) =>
    set((state) => ({
      tags: state.tags.filter((tag) => tag.id !== id),
    })),
}))
