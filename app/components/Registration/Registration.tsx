import { FC } from 'react'
import Layout from '../Layout/Layout'
import Form from './form/Form'

const Registration: FC = () => {
  return <Layout title='registration' description='регистрируйтесь на сайте Life:) для поукупо гаджетов по низким ценам'>
    <Form title='Регистрация' IFormState='login'/>

    </Layout>
}

export default Registration