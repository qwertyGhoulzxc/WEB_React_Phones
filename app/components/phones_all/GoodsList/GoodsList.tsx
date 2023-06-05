import { FC, PropsWithChildren } from 'react'
import GoodsCard from './GoodsCard/GoodsCard'
import styles from './GoodsList.module.scss'

const GoodsList: FC<PropsWithChildren<unknown>> = () => {
  return <div className={styles.pageContainer}>

    <GoodsCard/>
    <GoodsCard/>
    <GoodsCard/>
    <GoodsCard/>
    <GoodsCard/>
    <GoodsCard/>
  </div>
}

export default GoodsList