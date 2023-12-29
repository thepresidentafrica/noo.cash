import { useQuery } from "@apollo/client";
import { GET_WAITING_LIST } from ".";

export const WaitingList = () => {
    const {data, loading,error}= useQuery(GET_WAITING_LIST);
    return (<>
        <pre>
            {
               !loading && JSON.stringify({data,loading,error},null,2)
            }
        </pre>
    </>)
  
}
