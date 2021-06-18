import Link from 'next/link';
import { useState } from 'react';
import { CashIcon } from '@heroicons/react/solid'

import { APPLICATIONS } from 'src/data/applications';

import { DetailsTabs } from 'src/components/ApplicationDetails';
import ApplicationDetails from 'src/components/ApplicationDetails';

const statusStyles = {
  approved: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  rejected: 'bg-red-100 text-red-800',
}

const Applications = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="h-screen">
      <ApplicationDetails
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
      <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
        Recent activity
      </h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mt-2">
          <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="w-full px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicants
                  </th>
                  <th className="w-full px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <Link href={{ query: { tab: DetailsTabs.Analysis.tab } }}>
                <tbody
                  className="bg-white divide-y divide-gray-200"
                  onClick={() => setShowDetails(true)}
                >
                  {APPLICATIONS.map((application) => (
                    <tr key={application.id} className="bg-white">
                      <td className="max-w-0 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <p className="text-gray-500 truncate group-hover:text-gray-900">
                          {application.name}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <p className="text-gray-500 truncate group-hover:text-gray-900">
                          {application.product}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <span className="text-gray-900 font-medium">
                          {new Intl.NumberFormat().format(application.amount)}{" "}
                        </span>
                        {application.currency}
                      </td>
                      <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                        <span
                          className={`
                            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                            ${statusStyles[application.status]}
                          `}
                        >
                          {application.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <time dateTime={application.datetime}>{application.datetime}</time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Link>
            </table>
            {/* Pagination */}
            <nav
              className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                  <span className="font-medium">20</span> results
                        </p>
              </div>
              <div className="flex-1 flex justify-between sm:justify-end">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Applications;