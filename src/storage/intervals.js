import dayjs from 'dayjs'
import { create } from 'zustand'
import { useUserStore } from './user'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useIntervalsStore = create(persist(immer((set, get) => ({
  startTime: null,
  lastProcessingTime: null,
  intervals: [],

  setStartTime: (startTime) => set(s => { s.startTime  = startTime }),
  setLastProcessingTime: (lastProcessingTime) => set((s) => { s.lastProcessingTime = lastProcessingTime }),
  setPastHour: (pastHour) => set((s) => {s.pastHour = pastHour}),
  getDuration: () => Date.now() - get().startTime,
  getHourDuration: () => (dayjs().startOf('minute').toDate().getTime() - dayjs(get().startTime).startOf('minute').toDate().getTime()) / 60000,
  getCurrentInterval: () => ({
    startTime: get().startTime,
    duration: get().getDuration(),
    statistics: {
      savedMoney: useUserStore.getState().getSavedMoney() * get().getHourDuration(),
      savedTime: useUserStore.getState().getSavedTime() * get().getHourDuration()
    }
  }),
  getActualIntervals: () => [...get().intervals, get().getCurrentInterval()],
  getSavedMoney: () => get().getActualIntervals().reduce((sum, i) => sum + i.statistics.savedMoney, 0),
  getSavedTime: () => get().getActualIntervals().reduce((sum, i) => sum + i.statistics.savedTime, 0),
  savedPerMonth: () => get().getActualInterval().filter(i => dayjs(i.startTime).month === dayjs().month).reduce((sum, i) => sum + i.statistics.savedMoney, 0),
  saveCurrentInterval: () => set((s) => { s.intervals.push(get().getCurrentInterval()) })

})), { name: 'intervals', storage: createJSONStorage(() => AsyncStorage) }))
