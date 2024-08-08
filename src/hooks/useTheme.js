import { useContext } from 'react'
import { useColorScheme } from 'react-native'
import { ThemeContext } from 'src/context/theme'

export const useTheme = () => {
  const systemTheme = useColorScheme()
  const theme = useContext(ThemeContext)
  return theme ?? systemTheme ?? 'light'
}
