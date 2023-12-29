import { AggregatedRewardsPage, AirtimePoweredPage, SmartShoppingToolsPage } from "."

export const ToolsPageSwitch = () => {
    return {
        'airtime-payments': <AirtimePoweredPage/>,
        'aggregated-rewards': <AggregatedRewardsPage/>,
        'smart-shopping-tools': <SmartShoppingToolsPage/>
    }
  
}
