import { create } from 'zustand'

export const useToggleSwitchesStore = create((set, get) => ({
	sideMenu: false,

	setToggleMenu: (boolean) => set({ sideMenu: boolean }),
}))
