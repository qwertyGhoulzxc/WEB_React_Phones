import { FC } from 'react'
import HeaderPart from './HeaderPart/HeaderPart'
import ShortTechnics from './ShortTechnics/ShortTechnics'
import Accessories from './Accessories/Accessories'
import Technics from './Technics/Technics'
import Wached from './Wached/Wached'
import Layout from '../Layout/Layout'
import { useAppSelector } from '@/app/hooks/redux'

const Phone: FC = () => {
    const phone = useAppSelector(state=>state.phoneSliceReducer)

  return <Layout title={phone.model}>
  <HeaderPart/>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
  <ShortTechnics/>
  <Accessories/>
  </div>
  <Technics/>
  {/* <Wached/> */}
  </Layout>
}

export default Phone