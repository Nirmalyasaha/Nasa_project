import { Grid } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Footer=()=>{


    return(
        <>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}> 
            <h2>Open Innovation Team</h2>
            <img src="https://api.nasa.gov/assets/footer/img/favicon-192.png" alt="" style={{width:"60px"}} />

            </Grid>
            <Grid item xs={12} sm={6}>
                <h2>Office of the Chief Information Officer</h2>

            </Grid>

        </Grid>
        </>
    )



}

export default Footer