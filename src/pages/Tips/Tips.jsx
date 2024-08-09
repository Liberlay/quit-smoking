import { View } from 'react-native'
import { Tip } from 'components/Tip/Tip'
import tips from 'src/localization/en/tips'
import { TipsIcons } from 'constants/icons'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { AppLayout } from 'components/AppLayout/AppLayout'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import makeStyles from './tips.style'

export const Tips = () => {
  const styles = useThemeStyles(makeStyles)

  return (
    <AppLayout>
      <View style={styles.container}>
        <KeyboardAwareScrollView scrollsToTop enableOnAndroid bounces={false} contentContainerStyle={styles.scroll}>
          {Object.entries(tips).map(([key, content], i) => (
            <Tip key={i} icon={TipsIcons[key]} title={content.title} caption={content.text} />
          ))}
        </KeyboardAwareScrollView>
      </View>
    </AppLayout>
  )
}
