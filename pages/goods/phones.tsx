import PhonesCatalog from '@/app/components/phones_all/PhonesCatalog'
import { GetServerSideProps, NextPage } from 'next'
import { FC } from 'react'

const phones: NextPage<any> = ({data}) => {
  return <PhonesCatalog data={data}/>
}

export const getServerSideProps:GetServerSideProps<any>=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return{
        props:{data}
    }
}

export default phones