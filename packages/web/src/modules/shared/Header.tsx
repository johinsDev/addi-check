import map from 'ramda/es/map'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { IRoute, routes } from '../../routes/Root'

export default function Header() {
  return (
    <header className="md:fixed w-full z-50">
      <nav className=" flex items-center justify-between flex-wrap bg-teal-600 p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="https://www.addi.com/">
            <img
              src="https://www.addi.com/static/logo-0d5494a92a3f0e3cda52517b106b4b79.png"
              alt="Addi"
              width="90"
              className="retina"
            />
          </a>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {map(
              (route: IRoute) => (
                <NavLink
                  to={`${route.layout}${route.path}`}
                  exact={true}
                  activeClassName="border-teal-200 border-b-2 py-2"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  key={route.name}
                >
                  {route.name}
                </NavLink>
              ),
              routes
            )}
          </div>
          <div className="flex items-center mr-4 md:mr-6 text-teal-200 hover:text-white cursor-pointer">
            <div className="text-sm md:text-base mr-3 w-3 md:w-4 h-3 md:h-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="undo"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current"
              >
                <path
                  fill="currentColor"
                  d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"
                />
              </svg>
            </div>
            <span
              className="text-sm md:text-base"
              onClick={() => window.location.reload()}
            >
              Reload
            </span>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-between flex-wrap bg-gray-100 p-4 border-nav border-solid border-b z-50">
        <div className="flex items-center justify-center flex-row xl:flex-col flex-no-shrink text-black ml-0 md:ml-4 mr-0 md:mr-4 xl:ml-6 xl:mr-6 animate-banner">
          <p className="text-sm md:text-base xl:text-lg text-gray-700">
            Background check
          </p>
        </div>
      </div>
    </header>
  )
}
