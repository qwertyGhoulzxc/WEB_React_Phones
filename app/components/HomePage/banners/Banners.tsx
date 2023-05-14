import { FC } from 'react'
import Image from 'next/image'
import IphoneMain from '../../../../public/images/banners/banners-iphone-main.png'
import styles from './Banners.module.scss'
const Banners: FC = () => {
  return <>
  
  <div className={styles.MainBanner}>
    <h2>Большой выбор техники Apple в Минске</h2>
    <Image  src={IphoneMain} alt='' width={486} height={550}/>
  </div>
  
  
  
  </>
}

export default Banners