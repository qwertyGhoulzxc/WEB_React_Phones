import HomePage from "@/app/components/HomePage/HomePage";
import {wrapper} from "@/app/redux/store";
import {GetServerSideProps} from "next";

import {getMe} from "@/app/redux/reducers/requests";

export default function Index() {

    return (

        <HomePage/>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    try {
        await getMe(ctx, store)
        return {
            props: {}
        }
    } catch (e) {
        console.log(e)
        return {
            props: {}
        }
    }
})