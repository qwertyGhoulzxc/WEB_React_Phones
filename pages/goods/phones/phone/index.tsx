import Phone from '@/app/components/Phone/Phone'
import { phoneSliceActions } from '@/app/redux/reducers/phone.slice'
import { getMe } from '@/app/redux/reducers/requests'
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
        const page:number = Number(query.page)||1
        // const phonesData = await phoneService.getPhones(12,page,"true");
        // написать новый запрос
        // store.dispatch(phonesDataActions.setData(phonesData))
        //создать новые поля в redux
        await getMe(ctx, store)
        const data = await phoneService.getPhoneById(String(page))
        store.dispatch(phoneSliceActions.setOnePhone(...data.phones))        
        return {
          props: {}
        };
})

export default PhonePage