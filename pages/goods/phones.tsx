import PhonesCatalog from "@/app/components/phones_all/PhonesCatalog";
import {
  TPhoneResponse,
  TPhoneShortResponse,
} from "@/app/sevices/types.phoneService/TPhoneResponse";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { phoneService } from "../../app/sevices/PhoneService";
import { ParsedUrlQuery } from "querystring";

const page: NextPage<TPhoneResponse> = ({ ...data }) => {
  return <PhonesCatalog data={data} />;
};
//:GetStaticProps<TPhoneResponse>

interface IPathParams extends ParsedUrlQuery{
  page:string
}

export const getStaticProps: GetStaticProps<any,IPathParams> = async (
  ctx:GetStaticPropsContext<IPathParams>
) => {
  try {
    // const {} = ctx
    // const page = Number(params?.page) |1
    // console.log(params);
    
    const phonesData = await phoneService.getPhones(2,1,"true");
    //сетать в redux
    return {
      props: {
        phonesData,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        phonesData: undefined,
      },
      revalidate: 60,
    };
  }
}

export default page;
