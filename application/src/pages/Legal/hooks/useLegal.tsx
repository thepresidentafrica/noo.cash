import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const useLegal = () => {
    const { option } = useParams()
    const files: any = {
        terms: "/markdown/terms.md",
        policy: "/markdown/policy.md",
    }
    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(files[option?option:'policy'])
            .then((res) => res.text())
            .then((text) => {
                setContent(text);
            });
    },[option])
    return {
        content
    }
}