import { AggregatedRewardsPage, AirtimePoweredPage } from "."

export const ToolsPageSwitch = () => {
    return {
        'airtime-payments': <AirtimePoweredPage/>,
        'aggregated-rewards': <AggregatedRewardsPage/>,
        // TODO:'/smart-shopping-tools': SmartShoppingToolsPage
    }
  
}
