import Phone from '@/app/components/Phone/Phone'
import { phoneSliceActions } from '@/app/redux/reducers/phone.slice'
import { wrapper } from '@/app/redux/store'
import { phoneService } from '@/app/sevices/PhoneService'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

const PhonePage: FC = () => {
  return <Phone/>
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
       
  const {query,res} = ctx
  res.setHeader('Cache-Control','s-maxage=20,stale-while-revalidate=60')
        const page = Number(query.page)||1
        // const phonesData = await phoneService.getPhones(12,page,"true");
        // написать новый запрос
        // store.dispatch(phonesDataActions.setData(phonesData))
        //создать новые поля в redux
        const data = await phoneService.getPhoneById('12')
        store.dispatch(phoneSliceActions.setOnePhone(...data.phones))        
        return {
          props: {}
        };
})

export default PhonePage