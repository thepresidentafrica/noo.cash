import { PrivacyPolicy, TermsAndConditions } from "."

export const LegalSwitch = () => {
    return {
        policy: <PrivacyPolicy/>,
        terms: <TermsAndConditions />
    }
}