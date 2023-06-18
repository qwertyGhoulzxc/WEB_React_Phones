import {GetServerSideProps, NextPage} from "next";
import {wrapper} from "@/app/redux/store";
import {getMe} from "@/app/redux/reducers/requests";
import ActivateAccount from "@/app/components/activateAccount/activateAccount";

const activateAccount: NextPage = ({text}) => {
    return <ActivateAccount text={text}/>
}


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    await getMe(ctx, store)

    const state = store.getState()
    const isAuth = state.UserInfoReducer.isAuth
    const isActivated = state.UserInfoReducer.user.isActivated
    if (isAuth) {
        return {
            props: {}
        }
    } else if (!isActivated) {
        return {
            props: {
                text: 'Активируйте аккаунт для полноценного использования'
            }
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
})

export default activateAccount