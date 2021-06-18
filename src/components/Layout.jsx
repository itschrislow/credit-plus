import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CogIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
} from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  SearchIcon,
} from '@heroicons/react/solid'

import Nav from "src/components/Nav";
import Chatbot from "src/components/Chatbot";

const Layout = ({ children, showChatbot, setShowChatbot }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {!router.pathname.includes("dashboard") ?
        <div className="h-screen">
          <Nav />
          <main>
            {children}
          </main>
          <Chatbot showChatbot={showChatbot} setShowChatbot={setShowChatbot} />
        </div>
        :
        <div className="h-screen flex overflow-hidden bg-gray-100">
          {/* SIDEBAR */}
          <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex flex-col w-64">
              <div className="flex flex-col flex-grow bg-cyan-400 pt-5 pb-4 overflow-y-auto">
                {/* LOGO */}
                <div className="flex items-end flex-shrink-0 px-4">
                  <img
                    className="h-8 mr-1 w-auto"
                    src="/static/images/rhb-logo.png"
                    alt="RHB logo"
                  />
                  <img
                    className="h-8 w-auto"
                    src="/static/images/creditplus-logo.png"
                    alt="Credi+ logo"
                  />
                </div>
                {/* MAIN NAV */}
                <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-300 overflow-y-auto" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    {/* DASHBOARD */}
                    <Link href="/dashboard">
                      <div className={`
                        group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md 
                        ${router.pathname === "/dashboard" ?
                          'bg-cyan-500 text-white'
                          :
                          'text-cyan-100 hover:text-white hover:bg-cyan-300'
                        }
                      `}
                      >
                        <HomeIcon className="mr-4 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                        <p>Dashboard</p>
                      </div>
                    </Link>
                    {/* APPLICATIONS */}
                    <Link href="/dashboard/applications">
                      <div className={`
                        group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md 
                        ${router.pathname === "/dashboard/applications" ?
                          'bg-cyan-500 text-white'
                          :
                          'text-cyan-100 hover:text-white hover:bg-cyan-300'
                        }
                      `}
                      >
                        <DocumentReportIcon className="mr-4 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                        <p>Applications</p>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="px-2 space-y-1">
                      {/* SETTINGS */}
                      <div className={`
                        group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md 
                        ${router.pathname === "/dashboard/settings" ?
                          'bg-cyan-500 text-white'
                          :
                          'text-cyan-100 hover:text-white hover:bg-cyan-300'
                        }
                      `}
                      >
                        <CogIcon className="mr-4 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                        <p>Settings</p>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto focus:outline-none">
            <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
              <button
                className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Search bar */}
              <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="flex-1 flex">
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="search_field" className="sr-only">
                      Search
                    </label>
                    <div className="pointer-events-none relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                        {/* <SearchIcon className="h-5 w-5" aria-hidden="true" /> */}
                      </div>
                      <input
                        id="search_field"
                        name="search_field"
                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                        // placeholder="Search loan applications"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-0 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                            <div className="h-8 w-8 flex items-center justify-center rounded-full text-white font-medium bg-gray-300">
                              <p>A</p>
                            </div>
                            <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                              <span className="sr-only">Open user menu for </span>RHB Admin
                            </span>
                            <ChevronDownIcon
                              className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={`
                                    block px-4 py-2 text-sm text-gray-700 
                                    ${active ? 'bg-gray-100' : ''}
                                  `}
                                >
                                  Settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/"
                                  className={`
                                    block px-4 py-2 text-sm text-gray-700 
                                    ${active ? 'bg-gray-100' : ''}
                                  `}
                                >
                                  Logout
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>

            <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
              <div className="mt-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </div>
            </main>
          </div>

        </div>
      }
    </>
  )
}

export default Layout;