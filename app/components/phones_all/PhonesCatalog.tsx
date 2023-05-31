import { FC, PropsWithChildren } from 'react'
import Layout from '../Layout/Layout'
import HeaderPart from './header/HeaderPart'
import GoodsList from './GoodsList/GoodsList'



const PhonesCatalog: FC<PropsWithChildren<unknown>> = () => {
  return <Layout title='Iphones'>
    <HeaderPart/>
    <GoodsList/>
  </Layout>
}

export default PhonesCatalog