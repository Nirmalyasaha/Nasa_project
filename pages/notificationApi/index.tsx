import { FetchNotificationApi } from "@/api/functions/allfuntion";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";
import { Console } from "console";
import { useQuery } from "react-query";



export interface Notifications {
    messageType: string
    messageID: string
    messageURL: string
    messageIssueTime: string
    messageBody: string
}




export default function Notification() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["Notifications"],
        queryFn: FetchNotificationApi
    });
    console.log("Notofications data:", data)

    return (


        <>
        
        <h1 style={{textAlign:"center"}}>NOTIFICATIONS DATA</h1>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: "red" }}>MESSAGE TYPE</TableCell>
                            <TableCell sx={{ color: "red" }}>MESSAGE ID</TableCell>
                            <TableCell sx={{ color: "red" }}>MESSAGE ISSUE TIME</TableCell>
                            <TableCell sx={{ color: "red" }}>MESSAGE URL</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {data?.map((item: Notifications, key: any) => (
                            <TableRow key={key.messageID}>
                                <TableCell sx={{ fontSize: "10px", width: "20px",color:"yellow" }}>
                                    {item.messageBody}
                                </TableCell>
                                <TableCell  sx={{color:"yellow"}}>
                                   {item.messageID}
                                </TableCell>
                                <TableCell  sx={{color:"yellow"}}>
                                    {item.messageIssueTime}
                                </TableCell>
                                <TableCell  sx={{color:"yellow"}}>
                                    {item.messageURL}
                                </TableCell>
                            </TableRow>
                        ))}



                    </TableBody>
                </Table>
            </TableContainer>

        </>





    )

}