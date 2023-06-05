import { FC, PropsWithChildren } from 'react'
import Layout from '../Layout/Layout'
import HeaderPart from './header/HeaderPart'
import GoodsList from './GoodsList/GoodsList'
import { TPhoneResponse } from '@/app/sevices/types.phoneService/TPhoneResponse'
import FilterWindow from './FilterWindow/FilterWindow'
import styles from './PhonesCatatlog.module.scss'


interface PropsS{
    data:TPhoneResponse
}

const PhonesCatalog: FC<PropsWithChildren<PropsS>> = ({data}) => {
    console.log(data);
    
  return <Layout title='Iphones'>
    <HeaderPart/>
    <div className={styles.pageContainer}>
    <GoodsList/>
    <FilterWindow/>
    </div>
  </Layout>
}
//добавить раззмерные блоки
export default PhonesCatalog