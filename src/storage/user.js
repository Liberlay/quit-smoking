import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useUserStore = create(persist(immer((set) => ({
  settings: {
    name: '',
    gender: null,
    smokeType: null,
    smoke: {
      howMany: null,
    },
  },
  isAuthorized: false,
  setName: (name) => set((s) => { s.settings.name = name }),
  setGender: (gender) => set((s) => { s.settings.gender = gender }),
  setSmokeType: (smokeType) => set((s) => { s.settings.smokeType = smokeType }),
  setSmoke: (value) => set((s) => { s.settings.smoke = value }),
  setIsAuthorized : (value) => set(s => {s.isAuthorized = value})
})), { name: 'user', storage: createJSONStorage(() => AsyncStorage) }))
