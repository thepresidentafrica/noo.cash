import { Helmet } from "react-helmet"
import { RiStore2Line } from 'react-icons/ri'
import { IoQrCodeOutline } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";

export const AirtimePoweredPage = () => {
    return (<>
        <Helmet>
            <title>noo.cash | Tools - Airtime Powered Payments</title>
        </Helmet>
        <div className=" min-h-screen h-screen px-4 py-16 my-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2 justify-between items-center">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Use your Airtime
                            <br className="hidden md:block" />
                            to pay for{' '}
                            <span className="inline-block text-nocash-400">
                                Goods and services
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            At noo.cash, we've simplified the payment process for goods and services. Simply put, you can now use your airtime to make instant payments in a safe and secure way.                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                        <div>
                            <div className="flex items-center p-3 justify-center w-12 h-12 mb-4 rounded-full bg-nocash-50">
                                <BsChatSquareText className="w-10  h-10 text-nocash-400" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                USSD Payment Mechanism
                            </h6>
                            <p className="text-sm text-gray-900">
                                Utilize USSD codes to make in-store transactions using your existing airtime balance.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center p-3 w-12 h-12 mb-4 rounded-full bg-nocash-50">
                                <IoQrCodeOutline className="w-10 h-10 text-nocash-400" />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                QR code Payment Mechanism
                            </h6>
                            <p className="text-sm text-gray-900">

                                Scan a QR code at any partnering merchant shop to instantly pay using your airtime balance within the noo.cash wallet.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
          <img
            className="object-cover w-full 56 rounded shadow-lge sme:h-96"
            src="/ussd-qrcode.webp"
            alt="ussd-qrcode"
          />
        </div>
            </div>
        </div>
    </>)

}
