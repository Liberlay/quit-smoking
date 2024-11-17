import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useGoalsStore = create(persist(immer((set) => ({
  completed: [],
  addCompleted: (item) => set((s) => {s.completed.push(item)}),
  clearGoals: () => set((s) => {s.completed.length = 0})
})), { name: 'completed', storage: createJSONStorage(() => AsyncStorage) }))
