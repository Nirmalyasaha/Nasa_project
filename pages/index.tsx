import { FetchApodApi } from "@/api/functions/allfuntion"
import Wraper from "@/layout/wraper";
import { Grid, Typography } from "@mui/material";
import { useQuery } from "react-query"

export default function App() {


    const { data, isLoading, error } = useQuery({
        queryKey: ["ApodFetch"],
        queryFn: FetchApodApi
    });
    console.log("fetch data", data)

    return (
       
         <>

                {/* <h1>helllo wbb</h1>
                <h1>{data?.explanation}</h1>
                <img src={data?.url} alt="" /> */}

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{margin:"25px"}}>
                    <Grid item xs={6}>
                        <img src={data?.url} width={500} height={400}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{fontSize:"18px"}}>{data?.explanation}</Typography>
                    </Grid>
                </Grid>
            </>

           
       

    )
}


