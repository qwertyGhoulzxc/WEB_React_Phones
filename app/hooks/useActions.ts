import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import {BtnStateActions} from '../redux/reducers/Buttons.state'
import {LoadingActions} from '../redux/reducers/Loading.slice'
import {UserInfoActions} from '../redux/reducers/user.slice'
const allActions = {
    ...BtnStateActions,
    ...LoadingActions,
    ...UserInfoActions
}

export const useActions =()=>{
    const dispatch = useDispatch()

    return bindActionCreators(allActions,dispatch)
}