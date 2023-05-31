import { FC, PropsWithChildren } from 'react'
import styles from './HeaderPart.module.scss'

const HeaderPart: FC<PropsWithChildren<unknown>> = () => {
    
  return <>
  <h1>Apple Iphone</h1>
    <div className={styles.model}><p>iphone 13</p></div>
  </>
}

export default HeaderPart