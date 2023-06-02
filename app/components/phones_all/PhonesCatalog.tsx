import { FC, PropsWithChildren } from 'react'
import Layout from '../Layout/Layout'
import HeaderPart from './header/HeaderPart'
import GoodsList from './GoodsList/GoodsList'


interface PropsS{
    data:any
}

const PhonesCatalog: FC<PropsWithChildren<PropsS>> = ({data}) => {
    console.log(data);
    
  return <Layout title='Iphones'>
    <HeaderPart/>
    <GoodsList/>
  </Layout>
}

export default PhonesCatalog