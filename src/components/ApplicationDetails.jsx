import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, DocumentDownloadIcon } from '@heroicons/react/outline'
import {
  BookmarkIcon,
  CalendarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/solid'

import { GreenBadge, YellowBadge, RedBadge } from './Badges'

const tabs = [
  { name: 'Analysis', href: '#', current: false },
  { name: 'Financials', href: '#', current: false },
  { name: 'Credit Report', href: '#', current: true },
  { name: 'Business Viability', href: '#', current: false },
  { name: 'Directorships', href: '#', current: false },
]

const ApplicationDetails = ({ showDetails, setShowDetails }) => {
  const closeModal = () => setShowDetails(false)

  return (
    <Transition appear show={showDetails} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 bg-gray-700 bg-opacity-80">
          {/* OVERLAY */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-5xl">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  {/* CLOSE BUTTON */}
                  <div className="px-4 sm:px-6">
                    <div className="h-16 flex items-center justify-end">
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                          onClick={closeModal}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {/* HEADER */}
                    <div className="px-4 sm:px-6">
                      {/* OVERVIEW */}
                      <div className="mb-6 flex items-start justify-between">
                        <div>
                          {/* COMPANY NAME */}
                          <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">
                            Visibl Solutions
                            </h3>
                          {/* SSM REG */}
                          <p className="mb-2 text-sm text-gray-500">
                            202003315827 (003190749-H)
                            </p>
                          {/* LOAN DETAILS */}
                          <div className="-ml-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                            <div className="flex items-center text-sm text-gray-500">
                              <BookmarkIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                BizPower SME Business Loan
                              </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                MYR 120,000
                              </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Applied on January 9, 2020
                            </div>
                          </div>
                        </div>
                        {/* APPROVE / REJECT BUTTONS */}
                        <div className="flex space-x-3">
                          <button
                            type="button"
                            className="inline-flex self-start items-center px-3 py-2 border border-red-500 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Reject
                            </button>
                          <button
                            type="button"
                            className="inline-flex self-start items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Approve
                            </button>
                        </div>
                      </div>

                      {/* NAV */}
                      <div className="flex justify-between">
                        {/* TABS */}
                        <nav className="-mb-px flex space-x-8">
                          {tabs.map((tab) => (
                            <a
                              key={tab.name}
                              href={tab.href}
                              className={`
                                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm 
                                ${tab.current
                                  ? 'border-indigo-500 text-indigo-600'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }
                              `}
                              aria-current={tab.current ? 'page' : undefined}
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                        {/* COMPARE CTA */}
                        <p className="underline font-light text-sm text-blue-600 cursor-pointer">
                          Compare with historical data
                          </p>
                      </div>
                    </div>
                    {/* MAIN */}
                    <div className="px-4 py-5 sm:px-0 sm:py-0">
                      <div className="space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0">
                        {/* FINANCIAL STANDING */}
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Financial Standing
                          </p>
                          <div className="w-full mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6">
                            <div className="w-full grid grid-cols-3 gap-4">
                              <div className="col-span-1">
                                <p>Balance Sheet</p>
                                <GreenBadge>
                                  85%
                                </GreenBadge>
                              </div>
                              <div className="col-span-1">
                                <p>Income Statement</p>
                                <GreenBadge>
                                  85%
                                </GreenBadge>
                              </div>
                              <div className="col-span-1">
                                <p>Liquidity Ratios</p>
                                <RedBadge>
                                  34%
                                </RedBadge>
                              </div>
                              <div className="col-span-1">
                                <p>
                                  Profitability Ratios
                                </p>
                                <GreenBadge>
                                  85%
                                </GreenBadge>
                              </div>
                              <div className="col-span-1">
                                <p>
                                  Other Ratios
                                </p>
                                <YellowBadge>
                                  55%
                                </YellowBadge>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* PAYMENT BEHAVIOUR */}
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <div className="text-gray-500">
                            <p className="inline-flex text-sm font-medium sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Credit Report
                              <DocumentDownloadIcon className="ml-1 h-5 w-5 text-blue-500 cursor-pointer" />
                            </p>
                          </div>
                          <div className="w-full mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6">
                            <div className="w-full grid grid-cols-3 gap-4">
                              <div className="col-span-1">
                                <p>CTOS SME Score</p>
                                <GreenBadge>
                                  368
                                </GreenBadge>
                              </div>
                              <div className="col-span-1">
                                <p>Conduct of Account</p>
                                <RedBadge>
                                  Irregular
                                </RedBadge>
                              </div>
                              <div className="col-span-1">
                                <p>Payment Frequency</p>
                                <YellowBadge>
                                  Regular
                                </YellowBadge>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* BUSINESS VIABILITY */}
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Business Viability
                          </p>
                          <div className="w-full mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6">
                            <div className="w-full grid grid-cols-3 gap-4">
                              <div className="col-span-1">
                                <p>Sector</p>
                                <GreenBadge>
                                  Technology
                                </GreenBadge>
                              </div>
                              <div className="col-span-1">
                                <p>Cash Flow</p>
                                <RedBadge>
                                  85%
                                </RedBadge>
                              </div>
                              <div className="col-span-1">
                                <p>Working Capital</p>
                                <YellowBadge>
                                  34%
                                </YellowBadge>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* DIRECTORSHIP */}
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Directorship
                          </p>
                          <div className="w-full mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6">
                            <div className="w-full grid grid-cols-3 gap-4">
                              <div className="col-span-1">
                                <p>Emily Ang Mei Li</p>
                              </div>
                              <div className="col-span-1" />
                              <div className="col-span-1 text-blue-600 font-light underline cursor-pointer">
                                View Credit Report
                              </div>

                              <div className="col-span-1">
                                <p>Yau Yen Yen</p>
                              </div>
                              <div className="col-span-1" />
                              <div className="col-span-1 text-blue-600 font-light underline cursor-pointer">
                                View Credit Report
                              </div>

                              <div className="col-span-1">
                                <p>Jimmy Wong Wei Wei</p>
                              </div>
                              <div className="col-span-1" />
                              <div className="col-span-1 text-blue-600 font-light underline cursor-pointer">
                                View Credit Report
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child >
          </div >
        </div >
      </Dialog >
    </Transition >
  )
}

export default ApplicationDetails;