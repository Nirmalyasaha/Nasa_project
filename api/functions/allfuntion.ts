import { ImageGallery } from "@/pages/image";
import axiosInstance from "../axiosInstance/axiosinstance"
import { endpoint } from "../endpoint/endpoint"

export const FetchApodApi= async()=>{
    const res= await axiosInstance.get(endpoint.Nasa.ApodAPI)
    console.log('res', res);
    
return res?.data
}

///////


export const FetchMarRoverImg= async()=>{
    const res =await axiosInstance.get<ImageGallery>(endpoint.Nasa.MarRoverIMGAPI)
    console.log('res', res)
    return res?.data?.photos
}

/////


export const FetchDonkiApi=async ()=>{
    const res=await axiosInstance.get(endpoint.Nasa.DonkiApi)
    console.log("res",res)
        return res?.data
}


//////

export const FetchNotificationApi=async ()=>{
    const res =await axiosInstance.get(endpoint.Nasa.Notification)
    console.log("res",res)
    return res?.data
}