import {wrapper} from "@/app/redux/store";
import {AppProps} from "next/app";
import '../styles/globals.scss'

function App({Component, pageProps}: AppProps) {

    return (
        <Component {...pageProps}></Component>
    )

}

export default wrapper.withRedux(App)
