import PhonesCatalog from '@/app/components/phones_all/PhonesCatalog'
import {TPhoneResponse} from '@/app/sevices/types.phoneService/TPhoneResponse'
import {GetStaticPaths, NextPage} from 'next'
import {phoneService} from '../../app/sevices/PhoneService'
import { ParsedUrlQuery } from 'querystring'

const page: NextPage<TPhoneResponse> = ({...data}) => {

    return <PhonesCatalog data={data}/>
}
//:GetStaticProps<TPhoneResponse>

interface Params extends ParsedUrlQuery{
    page:string
}

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//     try {
//         const phonesData = await phoneService.getPhones(12, 1,);

//         return {
//             props: {
//                 phonesData
//             },
//             revalidate: 60
//         };
//     } catch (error) {
//         console.log(error);
//         return {
//             props: {
//                 phonesData: undefined
//             },
//             revalidate: 60
//         };
//     }
// }
export default page