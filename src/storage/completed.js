import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useUserStore = create(persist(immer((set) => ({
  completed: [],
  addCompleted: (item) => set((s) => {s.completed.push(item)})

})), { name: 'completed', storage: createJSONStorage(() => AsyncStorage) }))
