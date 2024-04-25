import { icons } from 'constants'
import { errorBorder } from 'constants/theme'
import { useUserStore } from 'src/storage/user'
import { useController, useForm } from 'react-hook-form'
import { PageTracker } from 'components/PageTracker/PageTracker'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './fifthPage.style'

export const FifthPage = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm()

  const {
    field: { value, onChange },
  } = useController({ name: 'smokeType', control, rules: { required: true } })

  const smokeTypes = {
    cigarettes: {
      icon: icons.cigarettes,
      label: 'Cigarettes',
    },
    iqos: {
      icon: icons.iqos,
      label: 'Iqos',
    },
    vape: {
      icon: icons.vape,
      label: 'Vape',
    },
  }

  const setSmokeType = useUserStore((s) => s.setSmokeType)

  const onSubmit = ({ smokeType }) => (
    setSmokeType(smokeType), navigation.navigate('SixthPage', { smokeType: value })
  )

  return (
    <OnboardingLayout onPress={handleSubmit(onSubmit)} isDisabled={!isValid}>
      <View style={styles.container}>
        <PageTracker />
        <Text style={styles.title}>Choose what you smoke</Text>
        <View style={styles.smokeTypes}>
          {Object.entries(smokeTypes).map(([key, smokeType]) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.smokeType,
                errors.smokeType && { ...errorBorder },
                value === key && styles.active,
              ]}
              onPress={() => onChange(key)}
            >
              <Image style={styles.image} source={smokeType.icon} />
              <Text style={styles.label}>{smokeType.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </OnboardingLayout>
  )
}
