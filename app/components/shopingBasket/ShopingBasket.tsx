import { FC } from 'react'
import {RxCrossCircled} from 'react-icons/rx'
import Layout from '../Layout/Layout'

const ShopingBasket: FC = () => {
  return <Layout title='Корзина'>
    <RxCrossCircled style={{fontSize:'50px'}}/>
  </Layout>
}

export default ShopingBasket