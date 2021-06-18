import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/solid';

import { DIRECTORS } from './Directorship';
import { DetailsTabs } from '../ApplicationDetails';
import { GreenBadge, YellowBadge, RedBadge } from '../Badges';

const Analysis = () => {
  return (
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
          <p className="text-sm font-medium sm:w-40 sm:flex-shrink-0 lg:w-48">
            Credit Report
            <p className="flex col-span-1 items-center text-blue-600 font-light underline cursor-pointer">
              <LinkIcon className="h-4 w-4" />
              report.pdf
            </p>
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
            {DIRECTORS.map(director => (
              <>
                <div className="col-span-1">
                  <p>{director.name}</p>
                </div>
                <div className="col-span-1" />
                <Link href={{ query: { tab: DetailsTabs.Directorship.tab } }}>
                  <div className="col-span-1 text-blue-600 font-light underline cursor-pointer">
                    View Credit Report
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Analysis;