import { FC } from 'react'
import styles from './inputSearch.module.scss'
import {BsSearch} from 'react-icons/bs'

const InputSearch: FC = () => {
  return ( <div className={styles.Wdth}>
  <input placeholder='Телефон iPhone ' className={styles.inputStyle}/>
  <BsSearch className={styles.icon}/>
  </div>
  )
}

export default InputSearch