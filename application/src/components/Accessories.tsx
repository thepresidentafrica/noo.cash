import { CheckIcon } from '@heroicons/react/24/outline'
export const AccessoriesComponent = () => {

    return (
        <div>
            <ul className="space-y-4 ml-4 text-left text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckIcon className="flex-shrink-0 w-3.5 h-3.5 text-nocash-500 dark:text-nocash-400"  />
                    <span>AI Powered Shopping Carts</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckIcon className="flex-shrink-0 w-3.5 h-3.5 text-nocash-500 dark:text-nocash-400"  />
                    <span>Agregate Rewards Voucher Cards</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckIcon className="flex-shrink-0 w-3.5 h-3.5 text-nocash-500 dark:text-nocash-400"  />
                    <span>Smart POS: <span className="font-semibold text-gray-900 dark:text-white">For Service Providers</span></span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckIcon className="flex-shrink-0 w-3.5 h-3.5 text-nocash-500 dark:text-nocash-400"  />
                    <span>Smart Wallet: <span className="font-semibold text-gray-900 dark:text-white">more than 10 supported currencies</span></span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckIcon className="flex-shrink-0 w-3.5 h-3.5 text-nocash-500 dark:text-nocash-400"  />
                    <span>Access Cards: <span className="font-semibold text-gray-900 dark:text-white">For smart Shops and event premises</span></span>
                </li>
            </ul>

        </div>
    )
}