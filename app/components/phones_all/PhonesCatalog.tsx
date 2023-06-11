import { FC } from 'react'
import Layout from '../Layout/Layout'
import HeaderPart from './header/HeaderPart'
import GoodsList from './GoodsList/GoodsList'
import { TPhoneShortResponse } from '@/app/sevices/types.phoneService/TPhoneResponse'
import FilterWindow from './FilterWindow/FilterWindow'
import styles from './PhonesCatatlog.module.scss'
import { useRouter } from 'next/router'


const PhonesCatalog: FC = () => {
    const {query:pageQuery,push} = useRouter()
    const handleClick = () =>{
      console.log(pageQuery);
      push({
      pathname: '/goods/phones',
      query: { page: '2'},
    });
  };
    
  return <Layout title='Iphones'>
    <button onClick={handleClick}>query</button>
    <HeaderPart/>
    <div className={styles.pageContainer}>
    <GoodsList/>
    <FilterWindow/>
    </div>
  </Layout>
}
//добавить раззмерные блоки
export default PhonesCatalog