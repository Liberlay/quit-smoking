import { Number } from './Number/Number'
import { Radio } from './Radio/Radio'
import { Switch } from './Switch/Switch'
import { withForm } from 'utils/withForm'

export const Input = {
  Number,
  Radio,
  Switch,
  Formed: {
    Number: withForm(Number),
    Radio: withForm(Radio),
    Switch: withForm(Switch),
  },
}
