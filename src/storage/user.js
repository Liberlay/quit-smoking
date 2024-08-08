import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useUserStore = create(persist(immer((set, get) => ({
  settings: {
    name: '',
    age:null,
    gender: null,
    smokeType: null,
    smoke: {
      howMany: null,
    },
    theme: null,
  },
  isAuthorized: false,
  setName: (name) => set((s) => { s.settings.name = name }),
  setAge: (age) => set((s) => { s.settings.age = age }),
  setGender: (gender) => set((s) => { s.settings.gender = gender }),
  setSmokeType: (smokeType) => set((s) => { s.settings.smokeType = smokeType }),
  setSmoke: (smoke) => set((s) => { s.settings.smoke = smoke }),
  setTheme: (theme) => set(s => { s.settings.theme = theme }),
  setIsAuthorized : (value) => set(s => { s.isAuthorized = value }),
  getSavedMoney: () => get().settings.smokeType === 'vape' ? get().settings.smoke.price / 7 / 1440 : get().settings.smoke.howMany / get().settings.smoke.inPack * get().settings.smoke.price / 1440,
  getSavedTime: () => get().settings.smokeType === 'vape' ? get().settings.smoke.inContainer / get().settings.smoke.howLong * 5 * 10 / 1440 : get().settings.smoke.howMany * 10 / 1440
})), { name: 'user', storage: createJSONStorage(() => AsyncStorage) }))
