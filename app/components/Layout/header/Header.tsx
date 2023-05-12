import { FC, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import styles from './header.module.scss'
import widthStyle from '../Layout.module.scss'
import InputSearch from './inputSearch/InputSearch'
import { useRouter } from 'next/router'
import { useActions } from '@/app/hooks/useActions'
import { useAppSelector } from '@/app/hooks/redux'


const Header: FC = () => {
    const {push,asPath} = useRouter()
    const {catalogBtn} = useAppSelector(state=>state.BtnStateReducer)
    const {setCatalogBtnState} = useActions()

    


    const handleOpenCatalog =(e:React.MouseEvent<HTMLButtonElement>):void=>{
      setCatalogBtnState(!catalogBtn)
      catalogBtn?push('/'):push('/catalog')
    }



  return (
    <header className={styles.headerCl}>
        <div className={widthStyle.container}>
        <div className={styles.firstLine}>
            <h1>Life:)</h1>
            <button onClick={handleOpenCatalog} style={catalogBtn?{color:"#002FC5",background:"white"}:{color:"white",background:"#002FC5"}}>{catalogBtn?<CgClose className={styles.icon}/>:<GiHamburgerMenu className={styles.icon}/> }<p>КАТАЛОГ</p></button>
            <InputSearch/>
            <div className={styles.profile}>+375 29 236 78 56</div>
        </div>
        <nav className={styles.secondLine}>
          <ul>
            <li>НОВИНКИ</li>
            <li>АКЦИИ</li>
            <li>СМАРТФОНЫ И УСТРОЙСТВА</li>
            <li>ЧЕХЛЫ И АКСЕССУАРЫ</li>
          </ul>
          <div className={styles.shopBag}><HiOutlineShoppingBag/><p>Корзина</p></div>

        </nav>
        </div>
    </header>
  )
}

export default Header