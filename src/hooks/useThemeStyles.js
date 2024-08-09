import { useTheme } from './useTheme'

export const useThemeStyles = (makeStyles) => {
  const theme = useTheme()
  return makeStyles(theme)
}
