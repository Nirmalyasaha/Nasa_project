import { FetchApodApi, FetchDonkiApi } from "@/api/functions/allfuntion";
import Wraper from "@/layout/wraper";
import { Box, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useQuery } from "react-query";


export interface Root {
    activityID: string
    catalog: string
    startTime: string
    sourceLocation: string
    activeRegionNum: any
    link: string
    note: string
    instruments: Instrument[]
    cmeAnalyses: CmeAnalyse[]
    linkedEvents: any
}

export interface Instrument {
    displayName: string
}

export interface CmeAnalyse {
    time21_5: string
    latitude: number
    longitude: number
    halfAngle: number
    speed: number
    type: string
    isMostAccurate: boolean
    note: string
    levelOfData: number
    link: string
    enlilList: any
}




export default function FetchDonki() {

    const { data, isLoading, error } = useQuery({
        queryKey: ["DonkiApi"],
        queryFn: FetchDonkiApi
    });
    console.log("donki data:", data)


    return (

        <>
            {isLoading ? (
                <>
                    <Box sx={{ width: 500 }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                    </Box>

                </>
            ) : (
                <>
                    <h1 style={{ textAlign: "center" }}> API DATA</h1>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ color: "red" }}>Activity ID</TableCell>
                                    <TableCell sx={{ color: "red" }}>START TIME </TableCell>
                                    <TableCell sx={{ color: "red" }}>CATALOG</TableCell>
                                    <TableCell sx={{ color: "red" }}>NOTE</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((item: Root, key: any) => (
                                    <TableRow key={key.activityID}>
                                        <TableCell sx={{color:"yellow"}}>
                                            {item.activityID}
                                        </TableCell>
                                        <TableCell sx={{color:"yellow"}}>
                                            {item.catalog}
                                        </TableCell>
                                        <TableCell sx={{color:"yellow"}}>
                                            {item.startTime}
                                        </TableCell>
                                        <TableCell sx={{color:"yellow"}}>
                                            {item.note}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </>
            )
            }


        </>

    )
}

