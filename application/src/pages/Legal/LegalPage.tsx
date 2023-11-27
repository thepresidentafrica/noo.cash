import { useParams } from "react-router-dom"
import { LegalSwitch } from "."
import "./policy.scss"
export const LegalPage = () => {
    const { option } = useParams()
    const LegalComponent = (LegalSwitch as any)()[option ? option : 'policy']
    return (<div className="mx-auto max-w-7xl min-h-screen bg-nocash-20 pt-16 mt-20">{LegalComponent}</div>)
}