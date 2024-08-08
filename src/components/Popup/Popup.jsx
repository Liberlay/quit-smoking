import { BlurView } from 'expo-blur'
import Modal from 'react-native-modal'
import { Pressable, View } from 'react-native'
import { useThemeStyles } from 'hooks/useThemeStyles'

import makeStyles from './popup.style'

export const Popup = ({ isVisible, setIsVisible, children, style }) => {
  const styles = useThemeStyles(makeStyles)

  return (
    <Modal
      isVisible={isVisible}
      animationIn={{
        from: { transform: [{ scale: 0.75 }], opacity: 0 },
        to: { transform: [{ scale: 1 }], opacity: 1 },
      }}
      animationInTiming={300}
      animationOut={{
        from: { transform: [{ scale: 1 }], opacity: 1 },
        to: { transform: [{ scale: 0.75 }], opacity: 0 },
      }}
      animationOutTiming={200}
      backdropOpacity={1}
      customBackdrop={
        <Pressable style={styles.blurContainer} onPress={() => setIsVisible(false)}>
          <BlurView style={styles.container} intensity={30} experimentalBlurMethod="dimezisBlurView" />
        </Pressable>
      }
    >
      <View style={[styles.modal, styles.modal[style]]}>
        <View style={[styles.modalBg, styles.modalBg[style]]}>{children}</View>
      </View>
    </Modal>
  )
}
