import { createElement } from 'react'
import { useController, useFormContext } from 'react-hook-form'

export const withForm = (component) => (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const {
    field: { value, onChange },
  } = useController({
    name: props.name,
    control,
    rules: { required: props.required, min: props.min },
  })

  return createElement(component, { ...props, value, onChange, error: errors[props.name] })
}
