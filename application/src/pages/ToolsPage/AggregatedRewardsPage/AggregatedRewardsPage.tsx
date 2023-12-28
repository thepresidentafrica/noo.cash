export const AggregatedRewardsPage = () => {
    return (<div className="py-8 my-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

        <div className="grid sm:grid-cols-2 gap-8">
            <img src="/aggregate.webp" alt="noo-cash aggregated rewards and gift cards" />
            <div className="re">
                <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                    Manage all your cards in one place
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">

                    We've developed a platform to help you manage all your gift and reward cards in one place. Managing your gift and reward cards has never been easier                </p>
                <div className="grid grid-cols-4 gap-4">
                    {
                        [ 'pep.svg','ackermans.png', 'shoprite.png', 'checkers.png', 'takealot.png', 'amazon.png','mrp.png','woolworth.png'].map((item, index) => <img key={index} src={`/patners/${item}`} alt={item} />)
                    }
                </div>
            </div>
        </div>
        <div className="me">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
                    <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
                        <div>
                            <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                                brand new
                            </p>
                            <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                                Aggregate Pro
                            </h5>
                            <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                                With Aggregate Pro, you can now merge up to 5 rewards and gift cards.
                            </p>

                        </div>
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-nocash-400 hover:bg-nocash-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </button>
                           
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
                        <div>
                            <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
                                coming soon
                            </p>
                            <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                                Aggregate Max
                            </h5>
                            <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                                With Aggregate Max, you will be able to merge more than 10 rewards and gift cards across africa.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>)

}
