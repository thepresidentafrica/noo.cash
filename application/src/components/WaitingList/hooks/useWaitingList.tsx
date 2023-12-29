import { useEffect, useState } from "react"
import { IWaitingList } from "../IWaitingList"
import { useLazyQuery, useMutation } from "@apollo/client";
import { JOIN_WAITING_LIST ,GET_WAITING_LIST} from "..";

export const useWaitingList = (waitListData?: IWaitingList) => {
    const [data, setData] = useState<{ list: IWaitingList| IWaitingList[], error: any } | null>(null);
    const [joinWaitingList] = useMutation(JOIN_WAITING_LIST);
    const [getWaitingList]= useLazyQuery(GET_WAITING_LIST);
    useEffect(() => {
        const waitList = async () => {
            if (waitListData) {
                const { data: result, errors } = await joinWaitingList({
                    variables: {
                        email: waitListData?.email,
                        products: waitListData?.products,
                    }
                })
                if (result) {
                    setData({ list: waitListData, error: errors })
                }
            } else {
                const { data: result,error } = await getWaitingList();
                console.log({result,error})
                if (result) {
                    setData({ list: result.noocash_WailtingList, error })
                }
            }
        }
        waitList().then(data=>data).then(data=>data)
    },[])
    return data
}

