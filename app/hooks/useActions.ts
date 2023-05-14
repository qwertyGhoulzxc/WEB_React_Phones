import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import {BtnStateActions} from '../redux/reducers/Buttons.state'
import { IsAuthActions } from "../redux/reducers/isAuth.slice"
const allActions = {
    ...BtnStateActions,
    ...IsAuthActions,
}

export const useActions =()=>{
    const dispatch = useDispatch()

    return bindActionCreators(allActions,dispatch)
}