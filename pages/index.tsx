import { FetchApodApi } from "@/api/functions/allfuntion"
import Wraper from "@/layout/wraper";
import { useQuery } from "react-query"

export default function App() {


    const { data, isLoading, error } = useQuery({
        queryKey: ["ApodFetch"],
        queryFn: FetchApodApi
    });
    console.log("fetch data", data)

    return (
        <Wraper>
        <>

            <h1>helllo wbb</h1>
            <h1>{data?.explanation}</h1>
             <img src={data?.url} alt="" />
        </>
        </Wraper>

    )
}


