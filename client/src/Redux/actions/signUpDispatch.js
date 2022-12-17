import { useDispatch } from "react-redux";

export default function ReduxActions() {

    const dispatch = useDispatch()

   const isOpenSignUp = ()=>{
        dispatch({type:"SIGN_UP_OPEN",payload:true})
    }
    const isClosedSignUp = ()=>{
        dispatch({type:"SIGN_UP_CLOSED",payload:false})
    }

  return({isOpenSignUp,isClosedSignUp})

}

