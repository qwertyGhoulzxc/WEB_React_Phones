import { FC, PropsWithChildren } from 'react'
import styles from './GoodsCard.module.scss'
import {BsArrowRightCircle} from 'react-icons/bs'

const GoodsCard: FC<PropsWithChildren<unknown>> = () => {
  return <div className={styles.card}>

    <div>
    <img src="https://content2.onliner.by/catalog/device/header/c66db6b4c5cce1915eadd8bb59f5c527.jpeg" alt="" />
    </div>
    <div className={styles.text}>
    <h2>iPhone 13</h2>
    <p>Space Gray / 256 GB</p>
    <div className={styles.la}>
        <div className={styles.priceProperty}>
    <h2 className={styles.price}>2 350 BYN</h2>
    <h2 className={styles.discountPrice}>2 350 BYN</h2>
    </div>
    <BsArrowRightCircle className={styles.icon}/>
    </div>
    </div>
  </div>
}

export default GoodsCard