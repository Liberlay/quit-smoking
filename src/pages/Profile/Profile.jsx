import { useEffect } from 'react'
import { Chart } from 'components/Chart'
import { Input } from 'components/Input'
import { Text, View } from 'react-native'
import { useUserStore } from 'src/storage/user'
import { useThemeStyles } from 'hooks/useThemeStyles'
import { FormProvider, useForm } from 'react-hook-form'
import { AppLayout } from 'components/AppLayout/AppLayout'
import { CigarettesIcon, IqosIcon, UserIcon, VapeIcon } from 'constants/icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import makeStyles from './profile.style'

export const UserSettings = () => {
  const smokeType = useUserStore((s) => s.settings.smokeType)
  const setSmoke = useUserStore((s) => s.setSmoke)

  const methods = useForm({
    defaultValues: useUserStore((s) => s.settings.smoke),
  })

  const smokeInputs = {
    cigarettes: ['howMany', 'inPack', 'price'],
    iqos: ['howMany', 'inPack', 'price'],
    vape: ['howLong', 'inContainer', 'price'],
  }

  const inputContent = {
    cigarettes: {
      title1: 'How many cigarettes did you smoke per day?',
      title2: 'Enter the number of cigarettes included per pack?',
      title3: 'How much did a pack of cigarettes cost?',
    },
    iqos: {
      title1: 'How many sticks did you smoke per day?',
      title2: 'How many sticks are included per pack?',
      title3: 'How much did a pack of sticks cost?',
    },
    vape: {
      title1: 'How many days the fluid container lasts?',
      title2: 'How many milliliters are in the container?',
      title3: 'How much money you spend on vape per week?',
    },
  }

  useEffect(() => {
    const subscription = methods.watch(methods.handleSubmit(setSmoke))

    return subscription.unsubscribe
  }, [smokeType, methods.handleSubmit, methods.watch])

  return (
    <FormProvider {...methods}>
      {smokeInputs[smokeType].includes('howMany') && (
        <Input.Formed.Number
          title={inputContent[smokeType].title1}
          name="howMany"
          required
          step={1}
          min={1}
          style="app"
        />
      )}
      {smokeInputs[smokeType].includes('howLong') && (
        <Input.Formed.Number
          title={inputContent[smokeType].title1}
          name="howLong"
          required
          step={0.5}
          min={0.5}
          style="app"
        />
      )}
      {smokeInputs[smokeType].includes('inPack') && (
        <Input.Formed.Number
          title={inputContent[smokeType].title2}
          name="inPack"
          required
          step={1}
          min={1}
          style="app"
        />
      )}
      {smokeInputs[smokeType].includes('inContainer') && (
        <Input.Formed.Number
          icon="ml"
          title={inputContent[smokeType].title2}
          name="inContainer"
          required
          step={0.5}
          min={0.1}
          style="app"
        />
      )}
      {smokeInputs[smokeType].includes('price') && (
        <Input.Formed.Number
          title={inputContent[smokeType].title3}
          icon={'$'}
          name="price"
          required
          step={0.5}
          min={0.1}
          style="app"
        />
      )}
    </FormProvider>
  )
}

export const Profile = ({ navigation }) => {
  const styles = useThemeStyles(makeStyles)
  const name = useUserStore((s) => s.settings.name)
  const age = useUserStore((s) => s.settings.age)
  const smokeType = useUserStore((s) => s.settings.smokeType)
  const setSmokeType = useUserStore((s) => s.setSmokeType)
  const setSmoke = useUserStore((s) => s.setSmoke)

  const smokeData = {
    cigarettes: ['howMany', 'inPack', 'price'],
    iqos: ['howMany', 'inPack', 'price'],
    vape: ['howLong', 'inContainer', 'price'],
  }

  const methods = useForm({
    mode: 'onChange',
    defaultValues: { smokeType },
  })

  const defaultValues = {
    howMany: 20,
    inPack: 20,
    price: 0,
    howLong: 0,
    inContainer: 0,
    containerPrice: 0,
  }

  useEffect(() => {
    const subscription = methods.watch(
      methods.handleSubmit(({ smokeType }) => {
        setSmoke(
          Object.fromEntries(
            smokeData[smokeType].map((key) => [key, useUserStore.getState().settings.smoke[key] ?? defaultValues[key]])
          )
        )
        setSmokeType(smokeType)
      })
    )
    return () => subscription.unsubscribe()
  }, [methods.handleSubmit, methods.watch])

  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.top.icon.wrapper}>
            <UserIcon style={styles.top.icon} />
          </View>
          <View style={styles.user}>
            <Text style={styles.user.name}>{name}</Text>
            <Text style={styles.user.age}>{age} years old</Text>
          </View>
        </View>
        <KeyboardAwareScrollView
          scrollsToTop
          enableOnAndroid
          bounces={false}
          extraScrollHeight={50}
          keyboardDismissMode="on-drag"
          contentContainerStyle={styles.scroll}
        >
          <View style={styles.chart}>
            <View style={styles.chart.top}>
              <Text style={styles.chart.top.title}>Improving your health</Text>
            </View>
            <View style={styles.chart.container}>
              <Chart.Bar />
            </View>
          </View>
          <View style={styles.settings}>
            <FormProvider {...methods}>
              <Input.Radio
                title="What you smoke"
                content={{
                  cigarettes: {
                    icon: CigarettesIcon,
                    label: 'Cigarettes',
                  },
                  iqos: {
                    icon: IqosIcon,
                    label: 'Iqos',
                  },
                  vape: {
                    icon: VapeIcon,
                    label: 'Vape',
                  },
                }}
                value={smokeType}
                onChange={setSmokeType}
                hideLabel
                style="app"
              />
              <UserSettings key={smokeType} />
            </FormProvider>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </AppLayout>
  )
}
