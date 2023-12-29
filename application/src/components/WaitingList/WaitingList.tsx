import { FC } from "react"
import { IWaitingList } from "./IWaitingList"

export const WaitingList:FC<IWaitingList> = ({product,email,fullName,option}) => {
    return (<>
        <pre>
            {
                JSON.stringify({product,email,fullName,option},null,2)
            }
        </pre>
    </>)
  
}
