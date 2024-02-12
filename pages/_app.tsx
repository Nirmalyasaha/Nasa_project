import Wraper from "@/layout/wraper";
import MuiThemeProvider from "@/mui-theme/MuiThemeProvider";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";




export default function APP ({Component,pageProps}:AppProps){
    const queryclient=new QueryClient



    return(

        <QueryClientProvider client={queryclient}>
             <Wraper>
            <Component {...pageProps}/>
            </Wraper>
        </QueryClientProvider>
    )

}

