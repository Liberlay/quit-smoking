import { useUserStore } from 'src/storage/user'

import styles from './home.style'

export const Home = () => {
  const settings = useUserStore((s) => s.settings)
}
