import { View } from 'react-native'
import { Goal } from 'components/Goal/Goal'
import { GoalsIcon } from 'constants/icons'
import { useUserStore } from 'src/storage/user'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { AppLayout } from 'components/AppLayout/AppLayout'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import makeStyles from './goals.style'

export const Goals = () => {
  const styles = useThemeStyles(makeStyles)
  const savedMoney = useUserStore((s) => s.getSavedMoney())

  return (
    <AppLayout>
      <View style={styles.container}>
        <KeyboardAwareScrollView scrollsToTop enableOnAndroid bounces={false} contentContainerStyle={styles.scroll}>
          <Goal icon={GoalsIcon} label={'Save 5$'} value={savedMoney} goalValue={5} />
          <Goal icon={GoalsIcon} label={'Save 10$'} value={savedMoney} goalValue={10} />
          <Goal icon={GoalsIcon} label={'Save 15$'} value={savedMoney} goalValue={15} />
          <Goal icon={GoalsIcon} label={'Save 20$'} value={savedMoney} goalValue={20} />
          <Goal icon={GoalsIcon} label={'No smoking for 100 day'} />
          <Goal icon={GoalsIcon} label={'No smoking for 100 day'} />
        </KeyboardAwareScrollView>
      </View>
    </AppLayout>
  )
}
