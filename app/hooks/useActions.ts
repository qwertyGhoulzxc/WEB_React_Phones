import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import {BtnStateActions} from '../redux/reducers/Buttons.state'
const allActions = {
    ...BtnStateActions,
}

export const useActions =()=>{
    const dispatch = useDispatch()

    return bindActionCreators(allActions,dispatch)
}