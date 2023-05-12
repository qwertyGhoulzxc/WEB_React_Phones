import { useActions } from '@/app/hooks/useActions'
import { FC } from 'react'
import Layout from '../Layout/Layout'


const Catalog: FC = () => {
const {setCatalogBtnState} = useActions()
    setCatalogBtnState(true)

  return <Layout title="Catalog" description='Каталог техники по низким ценам, в рассрочку'>
    Catalog
    
    </Layout>
}

export default Catalog