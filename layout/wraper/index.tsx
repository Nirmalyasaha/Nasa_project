import { Box } from "@mui/material"
import Header from "../header"
import Footer from "../footer"



interface HedaerProp{
    children:React.ReactNode
}


const Wraper=(props:HedaerProp)=>{
    const {children}=props
    return(
       
        <Box><Header/>{children}</Box>

    )

    

}
export default Wraper