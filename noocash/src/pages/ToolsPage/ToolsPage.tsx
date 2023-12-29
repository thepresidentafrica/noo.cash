import { useParams } from "react-router-dom";
import { ToolsPageSwitch } from ".";
export const ToolsPage = () => {
    const {option} = useParams()
    const RenderPage = (ToolsPageSwitch as any)()[option as string]
    return (<>
    {RenderPage}
    </>)
  
}
