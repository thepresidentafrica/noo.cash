import { useParams } from "react-router-dom";
export const ToolsPage = () => {
    const {option} = useParams()
    return (<>
    <h1>Tool {option}</h1>
    </>)
  
}
