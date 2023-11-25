import { NavLink } from 'react-router-dom'
import { Logo } from '..'
import { WEB_NAVIGATION_DATA } from './NavigationData'

export const WebsiteNavigation = () => {
  return (
    <div className="relative overflow-hidden bg-nocash-20">
      <div className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-x-1/4 translate-y-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa)" />
          </svg>
          <svg
            className="absolute left-full -translate-x-1/4 -translate-y-3/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className=" pb-4  fixed top-0 z-20 w-full bg-nocash-20 pt-6  sm:pb-6">
        <div className="mx-auto max-w-7xl  px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Logo text='noo.cash' />
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {WEB_NAVIGATION_DATA.map((item) => (
                <NavLink key={item.name} to={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
              <span className="inline-flex rounded-md shadow">
                <NavLink
                  to="/auth"
                  className="inline-flex  items-center rounded-md border border-transparent bg-white px-4 py-2 font-medium hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
