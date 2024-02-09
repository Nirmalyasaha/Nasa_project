import { FetchApodApi, FetchDonkiApi } from "@/api/functions/allfuntion";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
            <h1>Hello</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            
                            <TableCell>ActiceId</TableCell>
                            <TableCell>ActiceId</TableCell>
                            <TableCell>ActiceId</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


            </TableContainer>
        </>
    )
}

