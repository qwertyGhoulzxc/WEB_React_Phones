import { FC } from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
import styles from './Accessories.module.scss'
import AccessorCard from './AccessorCard/AccessorCard'
import Banner from './banner/Banner'
import Link from 'next/link'

const Accessories: FC = () => {
  return <div>
    <div className={styles.AccesoriesContainer}>
    <Link href={'/'}><h2>Чехлы и аксессуары </h2></Link>
    <BsArrowRightCircle/>
    </div>
    <div className={styles.raw}>
    <AccessorCard/>
    <AccessorCard/>
    <Banner/>
    </div>
  </div>
}

export default Accessories