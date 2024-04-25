import { icons } from 'constants'
import { errorBorder } from 'constants/theme'
import { useUserStore } from 'src/storage/user'
import { useController, useForm } from 'react-hook-form'
import { PageTracker } from 'components/PageTracker/PageTracker'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { OnboardingLayout } from 'components/OnboardingLayout/OnboardingLayout'

import styles from './fourthPage.style'

export const FourthPage = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm()

  const {
    field: { value, onChange },
  } = useController({ name: 'gender', control, rules: { required: true } })

  const genders = {
    male: {
      icon: icons.male,
      label: 'Male',
    },
    female: {
      icon: icons.female,
      label: 'Female',
    },
    nonBinary: {
      icon: icons.nonBinary,
      label: 'Non-binary',
    },
  }

  const setGender = useUserStore((s) => s.setGender)

  const onSubmit = ({ gender }) => (setGender(gender), navigation.navigate('FifthPage'))

  return (
    <OnboardingLayout onPress={handleSubmit(onSubmit)} isDisabled={!isValid}>
      <View style={styles.container}>
        <PageTracker />
        <Text style={styles.title}>Your gender</Text>
        <View style={styles.genders}>
          {Object.entries(genders).map(([key, gender]) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.gender,
                errors.gender && { ...errorBorder },
                value === key && styles.active,
              ]}
              onPress={() => onChange(key)}
            >
              <Image style={styles.image} source={gender.icon} />
              <Text style={styles.label}>{gender.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </OnboardingLayout>
  )
}
