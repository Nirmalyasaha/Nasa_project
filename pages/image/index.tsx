import { FetchMarRoverImg } from "@/api/functions/allfuntion"
import { useQuery } from "react-query"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';


export interface ImageGallery{
    photos:photo[]

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
  

export default function Image(){


    const {data,isLoading,error}=useQuery({
        queryKey:["image"],
        queryFn:FetchMarRoverImg
    });
    console.log("image data:",data);
    

    return(
       <>
       <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {data?.map((item,key) => (
        <ImageListItem key={item.id}>
          <img
         
            src={item.img_src}
            alt={item.earth_date}
            loading="lazy"
          />
          {/* <ImageListItemBar
            title={item.full}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`} */}
              
                {/* <InfoIcon />
             </ImageListItem>  */}
            
       
        </ImageListItem>
      ))}
    </ImageList>



    
       </>
    )
}