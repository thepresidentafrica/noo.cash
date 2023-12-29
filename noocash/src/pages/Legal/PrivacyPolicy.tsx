import { useLegal } from "./hooks/useLegal"
import ReactMarkdown from 'react-markdown'
import "./policy.scss"
import gfm from 'remark-gfm'
export const PrivacyPolicy = () => {
    const {content}= useLegal()
    return (
        <>
           <ReactMarkdown remarkPlugins={[gfm]}>
               {content}
           </ReactMarkdown>
        </>
    )
}

