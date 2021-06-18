import Link from 'next/link'
import { Fragment } from 'react'
import { useRouter } from "next/router";
import { XIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import {
  BookmarkIcon,
  CalendarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/solid'

import { statusStyles } from "../../pages/dashboard/applications";

import Credit from './Application/Credit';
import Analysis from './Application/Analysis';
import Financials from './Application/Financials';
import Directorship from './Application/Directorship';

export const DetailsTabs = {
  Analysis: { name: 'Analysis', tab: 'Analysis' },
  Financials: { name: 'Financials', tab: 'Financials' },
  Credit: { name: 'Credit Report', tab: 'Credit' },
  Directorship: { name: 'Directorship', tab: 'Directorship' },
}

const ApplicationDetails = ({
  index,
  showDetails,
  setShowDetails,
  applications,
  setApplications,
}) => {
  const router = useRouter();

  const closeModal = () => setShowDetails(false);

  const handleApprove = () => {
    let newApplications = [...applications];
    applications[index].status = 'approved';
    setApplications(newApplications);
    closeModal();
  }

  const handleReject = () => {
    let newApplications = [...applications];
    applications[index].status = 'rejected';
    setApplications(newApplications);
    closeModal();
  }

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
                      {/* OVERVIEW / REVIEW */}
                      <div className="mb-6 flex items-start justify-between">
                        <div>
                          {/* COMPANY NAME */}
                          <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">
                            {applications[index].name}
                          </h3>
                          {/* SSM REG */}
                          <p className="mb-2 text-sm text-gray-500">
                            202003315827 (003190749-H)
                            </p>
                          {/* LOAN DETAILS */}
                          <div className="-ml-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                            <div className="flex items-center text-sm text-gray-500">
                              <BookmarkIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                              {applications[index].product}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                MYR {new Intl.NumberFormat().format(applications[index].amount)}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Applied on {applications[index].date}
                            </div>
                          </div>
                        </div>
                        {/* APPROVE / REJECT BUTTONS */}
                        {applications[index].status !== "processing" ?
                          <>
                            {applications[index].status === "approved" &&
                              <span
                                className={`
                                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                                  ${statusStyles[applications[index].status]}
                                `}
                              >
                                {applications[index].status}
                              </span>
                            }
                            {applications[index].status === "rejected" &&
                              <span
                                className={`
                                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                                  ${statusStyles[applications[index].status]}
                                `}
                              >
                                {applications[index].status}
                              </span>
                            }
                          </>
                          :
                          <div className="flex space-x-3">
                            <button
                              type="button"
                              className="inline-flex self-start items-center px-3 py-2 border border-red-500 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                              onClick={handleReject}
                            >
                              Reject
                            </button>
                            <button
                              type="button"
                              className="inline-flex self-start items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                              onClick={handleApprove}
                            >
                              Approve
                          </button>
                          </div>
                        }
                      </div>

                      {/* NAV */}
                      <div className="flex justify-between">
                        {/* TABS */}
                        <nav className="-mb-px flex space-x-8">
                          {Object.keys(DetailsTabs).map((key) => {
                            const tab = DetailsTabs[key];
                            return (
                              <Link key={key} href={{ query: { tab: key } }}>
                                <p className={`
                                  whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm cursor-pointer 
                                  ${router.query.tab === key
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                  }
                                `}
                                >
                                  {tab.name}
                                </p>
                              </Link>
                            )
                          })}
                        </nav>
                        {/* COMPARE CTA */}
                        <Link href="/dashboard">
                          <p className="underline font-light text-sm text-blue-600 cursor-pointer">
                            Compare with historical data
                          </p>
                        </Link>
                      </div>
                    </div>
                    {/* MAIN */}
                    <div className="px-4 py-5 sm:px-0 sm:py-0">
                      {(router.query.tab === DetailsTabs.Analysis.tab ||
                        router.query.tab === undefined) &&
                        <Analysis />
                      }
                      {router.query.tab === DetailsTabs.Financials.tab &&
                        <Financials />
                      }
                      {router.query.tab === DetailsTabs.Credit.tab &&
                        <Credit />
                      }
                      {router.query.tab === DetailsTabs.Directorship.tab &&
                        <Directorship />
                      }
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