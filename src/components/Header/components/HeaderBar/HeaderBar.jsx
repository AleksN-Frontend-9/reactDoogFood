import styles from './headerbar.module.css'
import { HeaderSignIn } from '../HeaderSignIn/HeaderSignIn'
import { HeaderSignUp } from '../HeaderSignUp/HeaderSignUp'
import { HeaderSignOut } from '../HeaderSignOut/HeaderSignOut'
import { Cart } from '../CartIcon/CartIcon'
import { FavouriteIcon } from '../FavouriteIcon/FavouriteIcon'
import { HeaderProfile } from '../HeaderProfile/HeaderProfile'

export function HeaderBar() {
  return (
    <div className={styles.wr}>
      <FavouriteIcon />
      <Cart />
      <HeaderSignIn />
      <HeaderSignUp />
      <HeaderSignOut />
      <HeaderProfile />
    </div>
  )
}
