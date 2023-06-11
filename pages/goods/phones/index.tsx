import PhonesCatalog from "@/app/components/phones_all/PhonesCatalog";
import {GetServerSideProps,NextPage} from "next";
import { phoneService } from "../../../app/sevices/PhoneService";
import { wrapper } from "@/app/redux/store";
import { phonesDataActions } from "@/app/redux/reducers/phones.slice";

const page: NextPage = () => {
  return <PhonesCatalog />;
};



      export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
       
          const {query,res} = ctx
          res.setHeader('Cache-Control','s-maxage=20,stale-while-revalidate=60')
                const page = Number(query.page)||1
                const phonesData = await phoneService.getPhones(12,page,"true");
                store.dispatch(phonesDataActions.setData(phonesData))
                return {
                  props: {}
                };
    })

export default page;
