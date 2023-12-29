import ReactMarkdown  from 'react-markdown';
import gfm from 'remark-gfm'
import { useLegal } from './hooks/useLegal';
import "./policy.scss"

export const TermsAndConditions = () => {
const {content}= useLegal()
    return (
        <>
      
            <ReactMarkdown remarkPlugins={[gfm]}>
                {content}
            </ReactMarkdown>
        </>
    )
}