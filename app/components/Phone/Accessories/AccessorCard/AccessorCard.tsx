import { FC } from 'react'
import {MdOutlineShoppingBag} from 'react-icons/md'
import styles from './AccessorCard.module.scss'

const AccessorCard: FC = () => {
  return <div className={styles.container}>
    <img src="https://ir.ozone.ru/s3/multimedia-1/wc700/6469527409.jpg" alt="" />
    <div className={styles.description}>
    <h2 className={styles.name}>Чехол на iPhone 13 Pro </h2>
    <p>Violet Space</p>

    <div className={styles.line}>
    <h2>550 BYN</h2>
    <MdOutlineShoppingBag/>
    </div>
    </div>
  </div>
}

export default AccessorCard