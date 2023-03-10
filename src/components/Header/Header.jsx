import styles from './header.module.css'
import { Logo } from './components/Logo/Logo'
import { SearchBar } from './components/SearchBar/SearchBar'
import { HeaderBar } from './components/HeaderBar/HeaderBar'

export function Header() {
  console.log('Рендерится компонент Header')
  return (
    <header className={styles.wr}>
      <Logo />
      <SearchBar />
      <HeaderBar />
    </header>
  )
}
