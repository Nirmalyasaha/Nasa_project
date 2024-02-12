import { FetchMarRoverImg } from "@/api/functions/allfuntion"
import { useQuery } from "react-query"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import Wraper from "@/layout/wraper";


export interface ImageGallery {
  photos: photo[]

}
export interface photo {
  id: number
  sol: number
  camera: Camera
  img_src: string
  earth_date: string
  rover: Rover
}

export interface Camera {
  id: number
  name: string
  rover_id: number
  full_name: string
}

export interface Rover {
  id: number
  name: string
  landing_date: string
  launch_date: string
  status: string
  max_sol: number
  max_date: string
  total_photos: number
  cameras: Camera2[]
}

export interface Camera2 {
  name: string
  full_name: string
}


export default function Image() {


  const { data, isLoading, error } = useQuery({
    queryKey: ["image"],
    queryFn: FetchMarRoverImg
  });
  console.log("image data:", data);


  return (

   <>
      {/* <ImageList sx={{ width: "100%", height: 500}}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">IMAGE GALLERY</ListSubheader>
        </ImageListItem> */}

        {
          isLoading?(
              <>
     <Box sx={{ flexGrow: 1, marginTop:6}}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <Skeleton variant="rounded" width={300} height={300} />
        </Grid>
        <Grid item xs={3}>
        <Skeleton variant="rounded" width={300} height={300} />
        </Grid>
        <Grid item xs={3}>
        <Skeleton variant="rounded" width={300} height={300} />
        </Grid>
        <Grid item xs={3}>
        <Skeleton variant="rounded" width={300} height={300} />
        </Grid>
      </Grid>
    </Box>

  

              </>
          ):(
        
      <>
      <Typography style={{ margin: "10px", textAlign: "center" }}>IMAGE GALLERY</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {  

               data?.map((item, idx) => {
              return (
                <>
                  <Grid item xs={3} key={idx}  >
                    <img src={item.img_src} alt="" style={{ width: '300px', height: "300px" }} />
                  </Grid>
                </>
              )
            })
          }
        </Grid>
      </Box>
 </>
          )
}
      {/* </ImageList> */}




  </>
   
  )
}